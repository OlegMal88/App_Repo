import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '@shared/interfaces/field.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  field: FieldConfig;
  group: FormGroup;

  get isError(): boolean {
    if (!this.field.validations) {
      return;
    }
    const control = this.group.get(this.field.name);
    return control.touched && control.hasError(this.field.validations.find(item => item.name).name);
  }
}
