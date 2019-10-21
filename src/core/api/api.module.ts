import {NgModule} from '@angular/core';
import {DataService} from './mockServer/data.service';
import {CounterService} from './counter/counter.service';

@NgModule({
  providers: [
    DataService,
    CounterService,
  ]
})
export class ApiModule {}
