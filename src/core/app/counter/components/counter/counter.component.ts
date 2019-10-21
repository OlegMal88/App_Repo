import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
class CounterComponent {
  @Input() counter: number;

  @Output() increment: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrement: EventEmitter<void> = new EventEmitter<void>();
  @Output() asyncValue: EventEmitter<void> = new EventEmitter<void>();
  @Output() resetCounter: EventEmitter<void> = new EventEmitter<void>();

  incrementHandler() {
    this.increment.emit();
  }

  decrementHandler() {
    if (!this.counter) {
      return;
    }

    this.decrement.emit();
  }

  resetHandler() {
    this.resetCounter.emit();
  }

  getAsyncValue() {
    this.asyncValue.emit();
  }
}

export { CounterComponent };
