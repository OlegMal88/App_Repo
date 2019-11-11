import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FieldConfig } from '@shared/interfaces/field.interface';
import { ValidationRegExp } from '@shared/interfaces/validation-regexp.interface';

const VALIDATION_REGEXP: ValidationRegExp = {
  // tslint:disable-next-line: max-line-length
  email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
};

@Injectable({
  providedIn: 'root'
})
class ValidationService {
  static emailValidator(control: FormControl): { invalidEmail: boolean } | null {
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

export {
  ValidationService,
};

