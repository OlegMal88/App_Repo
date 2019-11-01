import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { REGISTRATION_PAGE_ROUTES } from './new-hire.routing';

import { NewHireComponent } from './new-hire/new-hire.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';


@NgModule({
  declarations: [NewHireComponent, WelcomeComponent, PersonalInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(REGISTRATION_PAGE_ROUTES),
  ],
  providers: [],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class NewHireModule {}

export { NewHireModule };
