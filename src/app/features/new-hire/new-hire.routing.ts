import { Routes } from '@angular/router';

import { NewHireComponent } from './new-hire/new-hire.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const ROUTE_PATHS: { [key: string]: string } = {
  personalInfo: 'personal-info',
};

const REGISTRATION_PAGE_ROUTES: Routes = [
  {
    path: '',
    component: NewHireComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: ROUTE_PATHS.personalInfo,
        component: PersonalInfoComponent,
      }
    ]
  },
];

export { REGISTRATION_PAGE_ROUTES };
