import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '@shared/interfaces/field.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
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
