import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import * as Counter from '@state/counter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {
  counter$: Observable<Counter.State>;

  constructor(private store: Store<Counter.State>) {
  }

  ngOnInit() {
    this.store.dispatch(Counter.getCurrentValue());

    // this.counter$ = this.store.pipe(
    //   select<number>(Counter.selectors.selectCounter)
    // );
  }

  increment() {
    // console.log(this.counter);
  }

  decrement() {
    // if (!this.counter) {
    //   return;
    // }
    // console.log(this.counter);
  }

  save() {
    // console.log(this.counter);
  }

  reset() {
    // console.log(this.counter);
  }
}
