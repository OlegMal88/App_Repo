import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
class CounterComponent {
  @Input() counter;

  @Output() increment: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrement: EventEmitter<void> = new EventEmitter<void>();
  @Output() asyncValue: EventEmitter<void> = new EventEmitter<void>();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

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
    this.reset.emit();
  }

  getAsyncValue() {
    this.asyncValue.emit();
  }
}

export {CounterComponent};
