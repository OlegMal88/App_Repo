import { CounterService } from './counter.service';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromCounter from '../../state/counter';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private counterService: CounterService,
    ) {}

    @Effect()
    loadCounter$: Observable<Action> = this.actions$.pipe(
        ofType(fromCounter.actions.getCurrentValue),
        // TODO add type action
        mergeMap((actions: any) => {
          return this.counterService.getData().pipe(
            map((counter) => fromCounter.actions.getCurrentValueSuccess(counter)),
            catchError(err => of(fromCounter.actions.getCurrentValueError(err)))
          );
      })
    );
}
