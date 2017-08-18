import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import {
  CompaniesComponent,
  PageNotFoundComponent,
  SingleCompanyComponent,
  PeopleComponent,
  PersonComponent,
  AdminComponent,
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
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
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


