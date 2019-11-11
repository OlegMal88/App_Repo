import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { FieldConfig, Validator } from '@shared/interfaces/field.interface';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  isValidationMessage(validation: Validator): boolean {
    return this.group.get(this.field.name).hasError(validation.name) &&
      this.group.get(this.field.name).touched;
  }
}
