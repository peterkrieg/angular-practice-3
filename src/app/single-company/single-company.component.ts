import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-single-company',
  templateUrl: './single-company.component.html',
  styleUrls: ['./single-company.component.css']
})
export class SingleCompanyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // simple method, get snapshot of router - only works if component route doesn't change
    // works perfectly in this case
    const companyid = this.route.snapshot.paramMap.get('companyid');

    // unnecessary to subscribe here, since will be new instance of component each time
    // this.route.paramMap
    //   .subscribe(routes => {
    //     console.log({ routes });
    //     console.log(routes.get('companyid'));
    //   });
  }

}
