import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
  ) { }

  people;

  ngOnInit() {
    const companyid = +this.route.snapshot.paramMap.get('companyid');
    this.peopleService.getPeople(companyid)
    .then(people => {
      this.people = people;
    })
  }

}
