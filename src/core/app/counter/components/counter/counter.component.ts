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
export class CounterComponent implements OnInit {
  @Input() counter = 0;

  @Output() counterValue: EventEmitter<number> = new EventEmitter<number>();
  @Output() saveCounterValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  increment() {
    this.counterValue.emit();
  }

  decrement() {
    this.counterValue.emit();
  }

  save() {
    this.saveCounterValue.emit();
  }

  reset() {
    this.saveCounterValue.emit();
  }

}
