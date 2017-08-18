import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CompaniesComponent,
  PageNotFoundComponent,
  SingleCompanyComponent,
  PeopleComponent,
  PersonComponent
} from './index';

const appRoutes: Routes = [
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: 'companies/:companyid',
    component: SingleCompanyComponent,
    children: [
      {
        path: '',
        component: PeopleComponent,
        children: [
          {
            path: 'people/:personid',
            component: PersonComponent,
          }
        ]
      }
    ]
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


