import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ButtonComponent } from './button.component';
import { FieldConfig } from '@shared/interfaces/field.interface';


describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  const formBuilder: FormBuilder = new FormBuilder();
  // TODO: move to separate file testing/mocks
  const mockFieldButton: FieldConfig = {
    type: 'button',
    label: 'Prew',
    colorClass: 'prew',
    callbackHandler: 'back',
  };

  const group = formBuilder.group({
    firstName: ['', Validators.required],
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;

    component.group = group;
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  describe('callbackHandler', () => {
    it('should check callbackHandler if exist', () => {
      component.field = {
        type: 'button',
        label: 'Prew',
        colorClass: 'prew',
      };

      expect(component.callbackHandler(component.field, {})).toBeNull();
    });

    it('should check callbackHandler if exist', () => {
      component.field = mockFieldButton;
      spyOn(component.emitHandler, 'emit');
      component.back({});

      expect(component.emitHandler.emit).toHaveBeenCalled();
    });
  });
});
