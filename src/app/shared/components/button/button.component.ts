import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '@shared/interfaces/field.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  field: FieldConfig;
  group: FormGroup;
  @Output() emitHandler: EventEmitter<any> = new EventEmitter();

  back(event) {
    this.emitHandler.emit(event);
  }
}
