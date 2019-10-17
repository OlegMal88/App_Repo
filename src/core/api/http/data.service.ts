import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const counter = [
      {
        counter: 100,
        id: 1,
      }
    ];

    return { counter };
  }
}
