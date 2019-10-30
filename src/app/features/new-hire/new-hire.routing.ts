import { NewHireComponent } from './new-hire/new-hire.component';
import { Routes } from '@angular/router';


import { WelcomeComponent } from './welcome/welcome.component';

const REGISTRATION_PAGE_ROUTES: Routes = [
  {
    path: '',
    component: NewHireComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      }
    ]
  },
];

export { REGISTRATION_PAGE_ROUTES };
