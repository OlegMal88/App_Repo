import { NgModule } from '@angular/core';
import { DataService } from '../services/mockServer/data.service';

@NgModule({
  providers: [
    DataService,
  ]
})
class SharedModule {
}

export { SharedModule };
