import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {CounterContainerComponent} from './counter-container.component';
import {MocksModule} from '@testing/mock.module';
import {CounterMockComponent} from '@testing/counter/counter-mock.component';
import {By} from '@angular/platform-browser';
import {CounterContainerService} from './counter-container.service';
import {of} from 'rxjs';

describe('CounterContainerComponent', () => {
  let component: CounterContainerComponent;
  let fixture: ComponentFixture<CounterContainerComponent>;
  let counterMockComponent: CounterMockComponent;
  let counterContainerServiceMock: any;

  beforeEach(async(() => {

    counterContainerServiceMock = {
      increment: jasmine.createSpy('increment'),
      decrement: jasmine.createSpy('decrement'),
      reset: jasmine.createSpy('reset'),
      getAsyncValue: jasmine.createSpy('getAsyncValue'),
      counter$: of('counter')
    };

    TestBed.configureTestingModule({
      imports: [MocksModule],
      declarations: [
        CounterContainerComponent
      ],
      providers: [
        {
          provide: CounterContainerService,
          useFactory: () => counterContainerServiceMock
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterContainerComponent);
    component = fixture.componentInstance;

    counterMockComponent = fixture.debugElement
      .query(By.directive(CounterMockComponent))
      .componentInstance;

    fixture.detectChanges();
  });

  describe('view', () => {
    it('should react on emitted increment', () => {
      spyOn(component, 'increment');

      counterMockComponent.increment.emit();

      expect(component.increment)
        .toHaveBeenCalled();
    });

    it('should react on emitted decrement', () => {
      spyOn(component, 'decrement');

      counterMockComponent.decrement.emit();

      expect(component.decrement)
        .toHaveBeenCalled();
    });

    it('should react on emitted reset', () => {
      spyOn(component, 'reset');

      counterMockComponent.reset.emit();

      expect(component.reset)
        .toHaveBeenCalled();
    });

    it('should react on emitted asyncValue', () => {
      spyOn(component, 'getAsyncValue');

      counterMockComponent.asyncValue.emit();

      expect(component.getAsyncValue)
        .toHaveBeenCalled();
    });

    it('should set counter input', fakeAsync(() => {
      fixture.detectChanges();

      tick();

      expect(counterMockComponent.counter)
        .toBe('counter');
    }));
  });

  describe('logic', () => {
    describe('increment', () => {
      it('should execute increment service method', () => {
        component.increment();

        expect(counterContainerServiceMock.increment)
          .toHaveBeenCalled();
      });
    });

    describe('decrement', () => {
      it('should execute decrement service method', () => {
        component.decrement();

        expect(counterContainerServiceMock.decrement)
          .toHaveBeenCalled();
      });
    });

    describe('reset', () => {
      it('should execute reset service method', () => {
        component.reset();

        expect(counterContainerServiceMock.reset)
          .toHaveBeenCalled();
      });
    });

    describe('getAsyncValue', () => {
      it('should execute getAsyncValue service method', () => {
        component.getAsyncValue();

        expect(counterContainerServiceMock.getAsyncValue)
          .toHaveBeenCalled();
      });
    });
  });
});
