import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '@shared/interfaces/field.interface';

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
    };
    return config[validatorName] || '';
  }

  static emailValidator(control) {
    if (control.touched && control.value.match(VALIDATION_REGEXP.email)) {
      return null;
    }
    return { invalidEmail: true };
  }

  public hasError(field: FieldConfig, group: FormGroup): boolean {
    const control = group.get(field.name);
    if (!field.validations || !control) {
      return false;
    }
    return control.touched && field.validations
                                    .some(item => control.errors && control.errors[item.name]);
  }
}
