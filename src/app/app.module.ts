import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { SingleCompanyComponent } from './single-company/single-company.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

import { PeopleService } from './index';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    PageNotFoundComponent,
    SingleCompanyComponent,
    PeopleComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    PeopleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
