import {CounterService} from './counter.service';
import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as CounterActions from '@state/counter/actions';

import {catchError, map, switchMap, pairwise, startWith, filter} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { ROUTE_PATHS } from 'src/core/app.routing';
import { RouterData, DEFAULT_ROUTER_STATE, RouterAction, RouterState } from '@state/router-serializer';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';

@Injectable()
class CounterEffects {

  constructor(
    private actions$: Actions,
    private counterService: CounterService,
  ) {
  }

  @Effect()
  loadCounter$: Observable<Action> = this.actions$.pipe(
    ofType(CounterActions.getCurrentValue),
    switchMap(() => this.loadCounterHandler())
  );

  private loadCounterHandler(): Observable<Action> {
    return this.counterService
      .getData()
      .pipe(
        map(([counter]: any) => CounterActions.getCurrentValueSuccess(counter)),
        catchError(err => of(CounterActions.getCurrentValueError(err))));
  }

  @Effect()
  public dispatchStartCounterOnNavigationEnd$ = this.actions$.pipe(
    ofType<RouterNavigatedAction<RouterState>>(ROUTER_NAVIGATED),
    startWith(DEFAULT_ROUTER_STATE),
    pairwise(),
    map((actions: [RouterAction, RouterAction]) => ({
      deactivateUrl: actions[0].payload.routerState.url,
      deactivateParams: actions[0].payload.routerState.params || {},
      activatedUrl: actions[1].payload.routerState.url,
      activatedParams: actions[1].payload.routerState.params || {},
    })),
    filter((data: RouterData) => data.activatedUrl.includes(ROUTE_PATHS.counter)),
    map((data: RouterData) => 
      CounterActions.getCurrentValueSuccess({
        id: null,
        value: data.activatedParams.value || 0
      })
    )
  );
}

export {CounterEffects};
