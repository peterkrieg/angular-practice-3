import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor() { }

  numCompanies = 10;

  blueprintCompanies = [
    { name: 'test-company-1' },
    { name: 'test-company-2' },
    { name: 'test-company-3'},
    {}, {}, {}, {}, {},
  ]


  companies = this.blueprintCompanies
  .map((company, index) => ({
    id: index,
    name: `test-company-${index}`,
  }));









  ngOnInit() {
  }

}
