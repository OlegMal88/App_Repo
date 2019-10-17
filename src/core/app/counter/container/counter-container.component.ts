import {Component, OnInit} from '@angular/core';
import {CounterContainerService} from './counter-container.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {

  public counter$: Observable<number> = this.counterContainerService.counter$;

  constructor(private counterContainerService: CounterContainerService) {
  }

  ngOnInit() {
    this.counterContainerService.getCurrentValue();
  }

  increment() {
    this.counterContainerService.increment();
  }

  decrement() {
    this.counterContainerService.decrement();
  }

  reset() {
    this.counterContainerService.reset();
  }
}
