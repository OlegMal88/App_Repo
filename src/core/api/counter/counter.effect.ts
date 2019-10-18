import {CounterService} from './counter.service';
import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as Counter from '@state/counter';

import {mergeMap, map, catchError} from 'rxjs/operators';
import {of, Observable} from 'rxjs';

@Injectable()
export class CounterEffects {

  constructor(
    private actions$: Actions,
    private counterService: CounterService,
  ) {
  }

  @Effect()
  loadCounter$: Observable<Action> = this.actions$.pipe(
    ofType(Counter.getCurrentValue),
    // TODO add type action
    mergeMap((action: any) => this.counterService.getData()
      .pipe(
        map(([counter]: any) => Counter.getCurrentValueSuccess(counter)),
        catchError(err => of(Counter.getCurrentValueError(err)))
      ))
  );
}
