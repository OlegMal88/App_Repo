import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';

import { PersonalInfoComponent } from './personal-info.component';

let mockLocation: any;

describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  beforeEach(async(() => {
    mockLocation = {
      back: jasmine.createSpy('back'),
    };

    TestBed.configureTestingModule({
      declarations: [PersonalInfoComponent],
      providers: [
        { provide: Location, useValue: mockLocation }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoComponent);

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  describe('logic', () => {
    describe('back', () => {
      it('should move back location', () => {
        component.back();

        expect(mockLocation.back)
        .toHaveBeenCalled();
      });
    });

    describe('save', () => {
      let originFunc: any;

      beforeEach(() => {
        originFunc = console.log;
        console.log = jasmine.createSpy('log');
      });

      afterEach(() => {
        console.log = originFunc;
      });

      it('should save form', () => {
        const DATA_TO_SAVE: any = {};
        component.save(DATA_TO_SAVE);

        expect(console.log)
        .toHaveBeenCalledWith(DATA_TO_SAVE);
      });
    });
  });
});


