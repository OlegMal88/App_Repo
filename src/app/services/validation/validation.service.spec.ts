import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';
import { FieldConfig } from '@shared/interfaces/field.interface';

describe('ValidationService', () => {
  const formBuilder: FormBuilder = new FormBuilder();
  let service: ValidationService;
  const field: FieldConfig = {
    type: 'input',
    label: 'First Name',
    inputType: 'text',
    name: 'firstName',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required'
      },
    ]
  };
  const group = formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  const controlFirstName = group.get(field.name);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: FormBuilder, useValue: formBuilder }
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('hasError', () => {
    it('should has NOT error when not touched', () => {
      controlFirstName.markAsUntouched();

      expect(service.hasError(field, group))
        .toBeFalsy();
    });

    it('should has NOT error when touched and input value', () => {
      controlFirstName.markAsTouched();
      controlFirstName.setValue('test value');

      expect(service.hasError(field, group))
        .toBeFalsy();
    });

    it('should has error when touched but has no value', () => {
      controlFirstName.markAsTouched();
      controlFirstName.setValue('');

      expect(service.hasError(field, group))
        .toBeTruthy();
    });

    it('should has NOT error when no validations', () => {
      const copyField = { ...field };
      copyField.validations = [];

      expect(service.hasError(copyField, group))
        .toBeFalsy();
    });

    it('should has NOT error when no control name', () => {
      const copyField = { ...field };
      copyField.name = 'Undefined name';

      expect(service.hasError(copyField, group))
        .toBeFalsy();
    });
  });

  describe('static method emailValidator', () => {
    const controlEmail = new FormControl(
      '',
      ValidationService.emailValidator
    );
    const correctValueExample = 'test@gmail.com';
    it('should has email error when correct value', () => {
      const notCorrectVal = 'test.test.com';
      controlEmail.markAsTouched();
      controlEmail.setValue(notCorrectVal);

      expect(ValidationService.emailValidator(controlEmail))
        .toEqual({ invalidEmail: true });
    });

    it('should has NOT email error when correct value', () => {
      controlEmail.markAsTouched();
      controlEmail.setValue(correctValueExample);

      expect(ValidationService.emailValidator(controlEmail))
        .toBeNull();
    });
  });

  describe('static method getValidatorErrorMessage', () => {
    const expectMessage = 'Required';
    it(`should has error when touched but has no value, message will be: ${expectMessage}`, () => {
      const control = controlFirstName;
      control.markAsTouched();
      control.setValue('');
      const validation = field.validations
        .find(item => control.errors && control.errors[item.name]);
      const name = validation && validation.name;

      expect(ValidationService.getValidatorErrorMessage(name))
        .toEqual(expectMessage);
    });
  });
});
