import { DynamicFormComponent } from './dynamic-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PERSONAL_INFO_FORM_CONFIG } from '@features/new-hire/personal-info/personal-info-config';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  const formBuilder: FormBuilder = new FormBuilder();
  // TODO: move to separate file testing/mocks
  const fieldsName = {
    firstName: 'Naomi',
    middleInitial: '',
    lastName: 'Test',
    otherLastName: 'Test1',
    ssn: 'ssn',
    dateOfBirth: '01.01.2000',
    streetAdress: 'some address',
    city: 'Washington',
    state: 'Washington',
    zipCode: '1111'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormComponent],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    component.fields = PERSONAL_INFO_FORM_CONFIG;
    component.form = (component as any).createControl();
  });

  describe('ngOnInit', () => {
    it('should create form', () => {
      component.form = (component as any).createControl();

      expect(Object.keys(component.form.controls)).toEqual(Object.keys(fieldsName));
    });
  });

  describe('onSubmit', () => {
    const event = document.createEvent('Event');

    it('should form invalid when empty', () => {
      Object.keys(fieldsName).forEach((field) => {
        component.form.controls[field].setValue('');
      });
      component.onSubmit(event);

      expect(component.form.invalid).toBeTruthy();
    });

    it('should validate all form fieds when not valid', () => {
      const validateAllFormFields = spyOn((component as any), 'validateAllFormFields');
      component.onSubmit(event);

      expect(validateAllFormFields).toHaveBeenCalledWith(component.form);
    });

    it('should emit value when the inputs not empty', () => {
      spyOn(component.save, 'emit');
      Object.entries(fieldsName).forEach(([field, value]) => {
        component.form.controls[field].setValue(value);
      });
      component.onSubmit(event);

      expect(component.save.emit).toHaveBeenCalledWith(component.form.value);
    });
  });

  describe('bindValidations', () => {
    it('should not create validation list if validations are empty array', () => {
      const fieldWithoutValadation = component.fields.find(item => item.name === 'middleInitial').validations;

      expect((component as any).bindValidations(fieldWithoutValadation || [])).toEqual(null);
    });
  });

  describe('validateAllFormFields', () => {
    it('should markAsTouched controls ', () => {
      (component as any).validateAllFormFields(component.form);

      expect(component.form.get('firstName').touched).toBeTruthy();
    });
  });
});
