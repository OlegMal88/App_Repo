import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Counter from '@state/counter';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {
  counter = 0;

  constructor(private store: Store<Counter.State>) {
  }

  ngOnInit() {
    this.store.dispatch(Counter.getCurrentValue);
  }

  increment() {
    console.log(this.counter);
  }

  decrement() {
    console.log(this.counter);
  }

  save() {
    console.log(this.counter);
  }

  reset() {
    console.log(this.counter);
  }
}
