import { FormBuilder, Validators } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessagesComponent } from './error-messages.component';
import { FieldConfig } from '@shared/interfaces/field.interface';

describe('ErrorMessagesComponent', () => {
  let component: ErrorMessagesComponent;
  let fixture: ComponentFixture<ErrorMessagesComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  // TODO: move to separate file testing/mocks
  const mockfieldInput: FieldConfig = {
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
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessagesComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.group = group;
    component.field = mockfieldInput;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isValidationMessage', () => {
    it('should show error message when touched and value is empty', () => {
      const control = component.group.get(component.field.name);
      control.markAsTouched();
      control.setValue('');

      component.isValidationMessage(component.field.validations[0]);

      expect(component.isValidationMessage(component.field.validations[0]))
        .toBeTruthy();
    });
  });
});
