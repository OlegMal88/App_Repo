import {NgModule} from '@angular/core';
import {DataService} from './mockServer/data.service';
import {CounterService} from './counter/counter.service';

@NgModule({
  providers: [
    DataService,
    CounterService,
  ]
})
class ApiModule {
}

export {ApiModule};
