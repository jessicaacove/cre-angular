import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { InvestorServiceService } from '../services/investor-service.service';

@Component({
  selector: 'app-investor-list',
  templateUrl: './investor-list.component.html',
  styleUrls: ['./investor-list.component.css']
})
export class InvestorListComponent implements OnInit {
  currentUser: any = {};

  investorArray: [{}];

  firstName: string;
  lastName: string;
  email: string;



  isShowingForm: boolean = false;

  logoutErrorMessage: string;
  investorListError: string;

  constructor(
    private router: Router,
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
    this.getInvestors();
  }

  logOut() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(() => {
        this.logoutErrorMessage = 'Logout failed';
      });
  }

  getInvestors() {
    return this.investorService.allInvestors()
      .subscribe((allTheInvestors) => {
        this.investorArray = allTheInvestors;
      },
      () => {
          this.investorListError = 'Sorry, could not find any projects.';
      });
  }

  showNewInvestorForm() {
  this.isShowingForm = true;
  }

  saveNewInvestor() {
    this.investorService.newInvestor(this.firstName, this.lastName, this.email)
      .subscribe(
        (newInvestorFromApi) => {
          this.investorArray.push(newInvestorFromApi);
          this.isShowingForm = false;
        },
        (err) => {
          const allErrors = err.json();
          console.log(allErrors);
        }
    )
  }

}
