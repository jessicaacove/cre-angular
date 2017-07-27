import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { InvestorServiceService } from '../services/investor-service.service';


@Component({
  selector: 'app-investor-by-id',
  templateUrl: './investor-by-id.component.html',
  styleUrls: ['./investor-by-id.component.css']
})
export class InvestorByIdComponent implements OnInit {

  currentUser: any = {};

  investorDetailsError: String;

  oneInvestor: any = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private investorService: InvestorServiceService
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      .then((userFromApi) => {
        this.currentUser = userFromApi;
      })
      .catch(() => {
        this.router.navigate(['/']);
      });

      this.activatedRoute.params.subscribe((params) => {
        this.getInvestorById(params.id);
      })
  }

  getInvestorById(id) {
    this.investorService.getOneInvestor(id)
      .subscribe((investorbyid) => {
        this.oneInvestor = investorbyid;
      },
      () => {
        this.investorDetailsError = 'Sorry, could not find any investors.';
      });
  }


  // deleteOneProject(id) {
  //   //call my apiService's deleteOne function and pass the id as the argument
  //   this.projectService.deleteOneProject(id)
  //   .subscribe((deletedProject)=>{});
  // }

}
