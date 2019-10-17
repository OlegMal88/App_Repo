import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
class CounterComponent {
  @Input() counter = 0;

  @Output() increment: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrement: EventEmitter<void> = new EventEmitter<void>();
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
}

export {
  CounterComponent
};
