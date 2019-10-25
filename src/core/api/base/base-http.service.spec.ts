import { TestBed } from '@angular/core/testing';
import { BaseHttpService } from './base-http.service';
import { TestScheduler } from 'rxjs/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('BaseHttpService', () => {
  let sut: BaseHttpService;
  let httpMock: any;
  let scheduler: TestScheduler;

  const COUNTER_ERROR_RESPONSE_MOCK: any = 'ERROR';

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    httpMock = {
      get: jasmine
        .createSpy('get')
        .and.returnValue(
          scheduler.createHotObservable('-#', {}, COUNTER_ERROR_RESPONSE_MOCK)
        ),
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useFactory: () => httpMock,
        },
        BaseHttpService,
      ],
    });

    sut = TestBed.get(BaseHttpService);
  });

  describe('getData', () => {
    let expectations: any;

    beforeEach(() => {
      spyOn(sut as any, 'handleError').and.returnValue(
        of(COUNTER_ERROR_RESPONSE_MOCK)
      );

      expectations = scheduler.expectObservable(sut.getData());
    });

    it('should check http, get method call', () => {
      expectations.toBe('-(a|)', {
        a: COUNTER_ERROR_RESPONSE_MOCK,
      });

      scheduler.flush();
    });

    it('should use handleError for catching errors', () => {
      scheduler.flush();

      expect((sut as any).handleError).toHaveBeenCalledWith(
        COUNTER_ERROR_RESPONSE_MOCK
      );
    });

    it('should call http get method', () => {
      expect(httpMock.get).toHaveBeenCalledWith(`${sut.SERVER_URL}/counter`);
    });
  });

  describe('handleError', () => {
    let errorMessage = '404 error';
    const mockErrorResponse = {
      status: 404,
      statusText: 'Bad Request',
      body: { error: `Collection 'error-link' not found` },
    };

    it('should return Error mess', () => {
      errorMessage = `Backend returned code ${mockErrorResponse.status}: ${mockErrorResponse.body.error}`;
      scheduler
        .expectObservable((sut as any).handleError(mockErrorResponse))
        .toBe('#', null, errorMessage);

      scheduler.flush();
    });
  });
});
