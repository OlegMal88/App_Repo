import { CounterService } from '@api/counter/counter.service';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as CounterActions from '@state/counter/actions';

import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as models from '@api/models/';

@Injectable()
class CounterEffects {
  constructor(private actions$: Actions, private counterService: CounterService) {}

  @Effect()
  loadCounter$: Observable<Action> = this.actions$.pipe(
    ofType(CounterActions.getCurrentValue),
    switchMap(() => this.loadCounterHandler())
  );

  private loadCounterHandler(): Observable<Action> {
    return this.counterService.getData().pipe(
      map((counters: models.CounterModel[]) => {
        const [counter] = counters;
        return CounterActions.getCurrentValueSuccess(counter);
      }),
      catchError(err => of(CounterActions.getCurrentValueError(err)))
    );
  }
}

export { CounterEffects };
