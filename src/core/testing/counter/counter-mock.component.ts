import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<div></div>',
})
class CounterMockComponent {
  @Input() counter;

  @Output() increment: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrement: EventEmitter<void> = new EventEmitter<void>();
  @Output() asyncValue: EventEmitter<void> = new EventEmitter<void>();
  @Output() resetCounter: EventEmitter<void> = new EventEmitter<void>();
}

export { CounterMockComponent };
