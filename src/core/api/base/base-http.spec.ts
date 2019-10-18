import { TestBed } from '@angular/core/testing';
import { BaseHttpService } from './base-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CounterModel } from '@api/models/counter.model';

fdescribe('BaseHttpService', () => {
  let service: BaseHttpService;
  let httpMock: HttpTestingController;

  const COUNTER_ERROR_RESPONSE_MOCK: any = 'ERROR';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseHttpService],
    });

    service = TestBed.get(BaseHttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('getData', () => {
    it('should return an Observable<Counter[]>', () => {
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
