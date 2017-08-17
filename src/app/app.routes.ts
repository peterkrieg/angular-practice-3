import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent, PageNotFoundComponent, SingleCompanyComponent } from './index';

export const AppRoutes: Routes = [
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'companies/:companyid',
    component: SingleCompanyComponent,
  },
  {
    path: '',
    redirectTo: '/companies',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
