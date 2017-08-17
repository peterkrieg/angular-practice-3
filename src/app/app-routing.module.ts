import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent, PageNotFoundComponent, SingleCompanyComponent } from './index';

const appRoutes: Routes = [
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
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true },
    )
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}


