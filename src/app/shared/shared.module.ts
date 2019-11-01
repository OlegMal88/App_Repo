import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '@services/mockServer/data.service';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';

@NgModule({
  imports: [CommonModule],
  providers: [
    DataService,
  ],
  declarations: [ErrorMessagesComponent],
  exports: [ErrorMessagesComponent]
})
class SharedModule {
}

export { SharedModule };
