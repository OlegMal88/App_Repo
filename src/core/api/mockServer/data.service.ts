import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
class DataService implements InMemoryDbService {
  createDb() {
    const counter = [
      {
        value: 100,
        id: 1,
      },
    ];

    return { counter };
  }
}

export { DataService };
