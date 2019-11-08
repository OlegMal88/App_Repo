import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataService } from '@services/mockServer/data.service';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { DynamicFormComponent } from '@shared/components/dynamic-form/dynamic-form.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { DynamicFieldComponent } from '@shared/components/dynamic-field/dynamic-field.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    DataService,
  ],
  declarations: [
    ErrorMessagesComponent,
    DynamicFormComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    DynamicFieldComponent,
  ],
  exports: [
    ErrorMessagesComponent,
    DynamicFormComponent,
    DynamicFieldComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
  ]
})
class SharedModule {
}

export { SharedModule };
