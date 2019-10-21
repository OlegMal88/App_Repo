import {TestBed} from '@angular/core/testing';
import {BaseHttpService} from './base-http.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CounterModel} from '@api/models/counter.model';
import {TestScheduler} from 'rxjs/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

fdescribe('BaseHttpService', () => {
  let service: BaseHttpService;
  let httpMock: any;
  let scheduler: TestScheduler;

  const COUNTER_ERROR_RESPONSE_MOCK: any = 'ERROR';

  beforeEach(() => {

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual)
        .toEqual(expected);
    });

    httpMock = {
      get: jasmine.createSpy('get')
        .and
        .returnValue(scheduler.createHotObservable(
          '-#',
          {},
          COUNTER_ERROR_RESPONSE_MOCK
        ))
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useFactory: () => httpMock
        },
        BaseHttpService],
    });

    service = TestBed.get(BaseHttpService);
  });

  describe('getData', () => {
    it('should check http,get method call', () => {
      spyOn((service as any), 'handleError')
        .and.returnValue(of(COUNTER_ERROR_RESPONSE_MOCK));

      scheduler.expectObservable(service.getData())
        .toBe('-(a|)', {
          a: COUNTER_ERROR_RESPONSE_MOCK
        });

      scheduler.flush();

      expect((service as any).handleError)
        .toHaveBeenCalledWith(COUNTER_ERROR_RESPONSE_MOCK);
    });
    xit('should return an Observable<Counter[]>', () => {
      const counters: any[] = [new CounterModel(1, 100)];

      service.getData().subscribe(countersData => {
        expect(countersData.length).toBe(1);
        expect(countersData).toEqual(counters);
      });

      const req = httpMock.expectOne(`${service.SERVER_URL}/counter`);
      expect(req.request.method).toBe('GET');
      req.flush(counters);
    });
  });
});
