import {CounterEffects} from '@api/counter/counter.effect';
import * as CounterActions from '@state/counter/actions';
import {TestScheduler} from 'rxjs/testing';
import {TestBed} from '@angular/core/testing';
import {MocksModule} from '@testing/mock.module';
import {CounterService} from '@api/counter/counter.service';
import {Actions} from '@ngrx/effects';
import {of} from 'rxjs';

describe('CounterEffects', () => {
  let sut: CounterEffects;
  let actionsMock: any;
  let counterServiceMock: any;
  let scheduler: TestScheduler;

  const COUNTER_SUCCESS_RESPONSE_MOCK: any = {id: 1, counter: 100};
  const COUNTER_ERROR_RESPONSE_MOCK: any = 'ERROR';

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual)
        .toEqual(expected);
    });

    counterServiceMock = {
      getData: jasmine.createSpy('getData')
        .and
        .returnValue(
          scheduler
            .createHotObservable(
              '-a-#-',
              {
                a: [COUNTER_SUCCESS_RESPONSE_MOCK]
              },
              COUNTER_ERROR_RESPONSE_MOCK
            ))
    };

    actionsMock = scheduler
      .createHotObservable('a', {a: CounterActions.getCurrentValue});

    TestBed.configureTestingModule({
      imports: [
        MocksModule
      ],
      providers: [
        {
          provide: CounterService,
          useFactory: () => counterServiceMock
        },
        {
          provide: Actions,
          useFactory: () => actionsMock
        },
        CounterEffects
      ]
    });

    sut = TestBed.get(CounterEffects);
  });

  describe('loadCounter$', () => {
    it('should load counter on CounterActions.getCurrentValue action', () => {

      spyOn((sut as any), 'loadCounterHandler')
        .and
        .returnValue(of(COUNTER_SUCCESS_RESPONSE_MOCK));

      scheduler.expectObservable(sut.loadCounter$)
        .toBe(
          'a',
          {a: COUNTER_SUCCESS_RESPONSE_MOCK}
        );

      scheduler.flush();
    });
  });

  describe('loadCounterHandler', () => {
    it('should handle load counter response', () => {
      scheduler.expectObservable((sut as any).loadCounterHandler())
        .toBe('-a-(b|)-', {
          a: CounterActions.getCurrentValueSuccess(COUNTER_SUCCESS_RESPONSE_MOCK),
          b: CounterActions.getCurrentValueError(COUNTER_ERROR_RESPONSE_MOCK)
        });

      scheduler.flush();
    });
  });
});
