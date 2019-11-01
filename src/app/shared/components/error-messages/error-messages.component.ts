import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '@services/validation/validation.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent {
  @Input() control: FormControl;

  get errorMessages(): string[] {
    if (!this.control.errors || !this.control.touched) {
      return [''];
    }

    return Object.entries(this.control.errors)
          .reduce((acc, [key, value]) =>
            [...acc, ValidationService.getValidatorErrorMessage(key, value)], []);
  }
}
