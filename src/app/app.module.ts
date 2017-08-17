import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { SingleCompanyComponent } from './single-company/single-company.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    PageNotFoundComponent,
    SingleCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
