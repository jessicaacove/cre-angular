import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { LenderService } from '../services/lender.service';

@Component({
  selector: 'app-lender-list',
  templateUrl: './lender-list.component.html',
  styleUrls: ['./lender-list.component.css']
})
export class LenderListComponent implements OnInit {
  currentUser: any = {};

  lenderArray: [{}];


  institutionName: string;
  contactFirstName: string;
  contactLastName: string;
  email: string;
  projectSizeMin: number;
  projectSizeMax: number;
  geographicalArea: [string];
  projectTypes: [string];


  isShowingForm: boolean = false;


  lenderListError: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private lenderService: LenderService,
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      .then((userFromApi) => {
        this.currentUser = userFromApi;
      })
      .catch(() => {
        this.router.navigate(['/']);
      });
    this.getLenders();
  }



  getLenders() {
    return this.lenderService.allLenders()
      .subscribe((allTheLenders) => {
        this.lenderArray = allTheLenders;
      },
      () => {
          this.lenderListError = 'Sorry, could not find any projects.';
      });
  }

  showNewLenderForm() {
  this.isShowingForm = true;
  }

  hideNewLenderForm() {
  this.isShowingForm = false;
  }

  saveNewLender() {
    this.lenderService.newLender(this.institutionName, this.contactFirstName, this.contactLastName, this.email, this.projectSizeMin, this.projectSizeMax, this.geographicalArea, this.projectTypes)
      .subscribe(
        (newLenderFromApi) => {
          this.lenderArray.push(newLenderFromApi);
          this.isShowingForm = false;
        },
        (err) => {
          const allErrors = err.json();
        }
    )
  }

}
