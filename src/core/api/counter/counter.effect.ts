import {CounterService} from './counter.service';
import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as CounterActions from '@state/counter/actions';

import {catchError, map, switchMap, filter} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {ROUTE_PATHS } from 'src/core/app.routing';
import {RouterData, routerNavigatedState} from '@state/router-utils';


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
    routerNavigatedState,
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
