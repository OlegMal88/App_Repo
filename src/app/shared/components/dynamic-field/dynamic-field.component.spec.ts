import { InputComponent } from '@shared/components/input/input.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { DynamicFieldComponent } from './dynamic-field.component';
import { FieldConfig } from '@shared/interfaces/field.interface';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ButtonComponent } from '../button/button.component';

describe('DynamicFieldComponent', () => {
  let component: DynamicFieldComponent;
  let fixture: ComponentFixture<DynamicFieldComponent>;

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

  const mockfieldButton: FieldConfig = {
    type: 'button',
    label: 'Prew',
    colorClass: 'prew',
    callbackHandler: 'back',
  };

  const group = formBuilder.group({
    firstName: ['', Validators.required],
  });

  const mockTemplateRef = {
    instance: {
      emitHandler: null,
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DynamicFieldComponent,
        InputComponent,
        ButtonComponent
      ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          InputComponent,
          ButtonComponent,
        ]
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFieldComponent);
    component = fixture.componentInstance;

    component.componentRef = mockTemplateRef;
    component.field = mockfieldInput;
    component.group = group;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call dynamicCreateComponent', () => {
      spyOn((component as any), 'dynamicCreateComponent');
      component.ngOnInit();

      expect((component as any).dynamicCreateComponent).toHaveBeenCalled();
    });

    it('should call subscriberForEmitHandler', () => {
      spyOn((component as any), 'subscriberForEmitHandler');
      component.ngOnInit();

      expect((component as any).subscriberForEmitHandler).toHaveBeenCalled();
    });
  });

  describe('dynamicCreateComponent', () => {
    it('should create instance', () => {
      (component as any).dynamicCreateComponent();

      expect(component.componentRef.instance).toBeDefined();
    });

    it('should create property field and group for instance', () => {
      (component as any).dynamicCreateComponent();

      expect(component.componentRef.instance.field).toEqual(component.field);
      expect(component.componentRef.instance.group).toEqual(component.group);
    });
  });

  describe('subscriberForEmitHandler', () => {
    it('should not call emitHandler if no property in component', () => {
      expect((component as any).subscriberForEmitHandler()).toBeUndefined();
    });

    it('should call emitHandler output if call emit in ButtonComponent', () => {
      component.field = mockfieldButton;
      spyOn(component.emitHandler, 'emit');

      component.ngOnInit();
      component.componentRef.instance.emitHandler.emit();

      expect(component.emitHandler.emit).toHaveBeenCalled();
    });
  });
});
