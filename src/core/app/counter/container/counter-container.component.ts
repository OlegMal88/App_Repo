import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterState from '../../../state/counter';
import { getCurrentValue } from '@state/counter/actions';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {
  counter = 0;

  constructor(private store: Store<CounterState.state.State>) { }

  ngOnInit() {
    this.store.dispatch(getCurrentValue);


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

}
