import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListModule, BorderModule } from '@equifax/packet-ui-kit';
import { REGISTRATION_PAGE_ROUTES } from './new-hire.routing';

import { NewHireComponent } from './new-hire/new-hire.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [NewHireComponent, WelcomeComponent],
  imports: [
    CommonModule,
    ListModule,
    BorderModule,
    RouterModule.forChild(REGISTRATION_PAGE_ROUTES),
  ],
  providers: [],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class NewHireModule {}

export { NewHireModule };
