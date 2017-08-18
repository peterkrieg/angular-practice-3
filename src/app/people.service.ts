import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
  private people = [
    { name: 'jimmy', companyid: 1, id: 1 },
    { name: 'joe', companyid: 1, id: 2 },
    { name: 'samantha', companyid: 1, id: 3 },
    { name: 'peter', companyid: 2, id: 4 },
  ];

  // simulates async by returning a promise
  getPeople(companyid: string | number) {
    const people = this.people.filter(person => person.companyid === +companyid);
    return Promise.resolve(people);
  }

  constructor() { }

}
