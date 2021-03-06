import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Counter from '@state/counter';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
class CounterContainerService {
  public counter$: Observable<number> = this.store.pipe(
    select(Counter.selectCounter),
    distinctUntilChanged()
  );

  constructor(private store: Store<Counter.State>) {}

  increment() {
    this.store.dispatch(Counter.increment());
  }

  decrement() {
    this.store.dispatch(Counter.decrement());
  }

  resetCounter() {
    this.store.dispatch(Counter.reset());
  }

  getAsyncValue() {
    this.store.dispatch(Counter.getCurrentValue());
  }
}

export { CounterContainerService };
