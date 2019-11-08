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

  get isDisabled(): boolean {
    return this.field.disabled ? !this.group.valid : null;
  }

  back(event) {
    this.emitHandler.emit(event);
  }

  callbackHandler(field, event) {
    if (field.callbackHandler && this[field.callbackHandler]) {
      this[field.callbackHandler](event);
    }
    return null;
  }
}
