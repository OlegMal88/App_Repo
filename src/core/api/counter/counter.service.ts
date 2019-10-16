import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
class CounterService {

  constructor(private http: HttpClient) {
  }


}

export {
  CounterService
};
