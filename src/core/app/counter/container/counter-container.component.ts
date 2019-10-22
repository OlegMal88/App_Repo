import { Component } from '@angular/core';
import { CounterContainerService } from './counter-container.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
})
class CounterContainerComponent {
  public counter$: Observable<number> = this.counterContainerService.counter$;

  constructor(private counterContainerService: CounterContainerService) {}

  increment() {
    this.counterContainerService.increment();
  }

  decrement() {
    this.counterContainerService.decrement();
  }

  resetCounter() {
    this.counterContainerService.resetCounter();
  }

  getAsyncValue() {
    this.counterContainerService.getAsyncValue();
  }
}

export { CounterContainerComponent };
