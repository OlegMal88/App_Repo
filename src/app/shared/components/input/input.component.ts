import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '@shared/interfaces/field.interface';
import { ValidationService } from '@services/validation/validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  field: FieldConfig;
  group: FormGroup;

  get isError(): boolean {
    return this.validationService.hasError(this.field, this.group);
  }

  constructor(private validationService: ValidationService) {
  }
}
