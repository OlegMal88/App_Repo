import { Injectable } from '@angular/core';

const VALIDATION_REGEXP = {
  // tslint:disable-next-line: max-line-length
  email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
};

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any): string {
    const config = {
      required: 'Required',
      invalidEmail: 'Invalid email address',
      minlength: `Minimum length ${validatorValue.requiredLength}`
    };
    return config[validatorName] || '';
  }

  static emailValidator(control) {
    if (control.value.match(VALIDATION_REGEXP.email)) {
      return null;
    }
    return { invalidEmail: true };
  }
}
