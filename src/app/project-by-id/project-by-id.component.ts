import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { ProjectService } from '../services/project.service';
import { InvestorServiceService } from '../services/investor-service.service';
import { InvestmentService } from '../services/investment.service';
import { LenderService } from '../services/lender.service';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-project-by-id',
  templateUrl: './project-by-id.component.html',
  styleUrls: ['./project-by-id.component.css']
})
export class ProjectByIdComponent implements OnInit {

  currentUser: any = {};

  oneProject: any = {};

  investorArray = [];

  investment: any = {};

  investmentArray = [];

  amount: Number;
  investorId: String;
  projectId: String;

  debtAmount: Number;
  lenderId: String;

  lenderArray = [];

  isShowingForm: boolean = false;
  isShowingInvestmentForm: boolean = false;
  isShowingDebtForm: boolean = false;


  projectDetailsError: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private projectService: ProjectService,
    private investorService: InvestorServiceService,
    private investmentService: InvestmentService,
    private loanService: LoanService,
    private lenderService: LenderService
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
        this.getProjectById(params.id);
        this.projectId = params.id;
      })

      this.investorService.allInvestors().subscribe( (result) => this.investorArray = result);
      this.lenderService.allLenders().subscribe((result) => this.lenderArray = result);
  }


  getProjectById(id) {
    this.projectService.getOneProject(id)
      .subscribe((projectById) => {
        this.oneProject = projectById;
      },
      () => {
        this.projectDetailsError = 'Sorry, could not find any projects.';
      });
  }


// Form button variables

  showNewInvestmenttForm() {
    this.isShowingInvestmentForm = true;
    this.isShowingForm = true;
  }

  hideNewInvestmentForm() {
    this.isShowingInvestmentForm = false;
    this.isShowingForm = false;
  }

  showNewDebttForm() {
    this.isShowingDebtForm = true;
    this.isShowingForm = true;
  }

  hideNewDebtForm() {
    this.isShowingDebtForm = false;
    this.isShowingForm = false;
  }



  // Add an investment old

  // saveNewInvestment() {
  //   this.investment.project = this.oneProject._id;
  //   this.investment.investmentPercentage;
  // console.log("--------------------------------" + this.investment.investor);
  //
  //   this.investmentService.newInvestment(this.investment.investmentPercentage, this.investment.project, this.investment.investor)
  //     .subscribe(
  //       (newInvestmentFromApi) => {
  //         this.investmentArray.push(newInvestmentFromApi);
  //       },
  //
  //       (err) => {
  //         const allErrors = err.json();
  //         console.log(allErrors);
  //       }
  //     )
  // }



// add an investment newer
  // saveNewInvestment(investmentPercentage, projectId, investorId) {
  //   this.investmentService.newInvestment(investmentPercentage, projectId, investorId)
  //     .subscribe(
  //       (newInvestmentFromApi) => {
  //         this.isShowingForm = false;
  //       },
  //       (err) => {
  //         const allErrors = err.json();
  //       }
  //   )
  // }


// add an investment newest
  saveNewInvestment() {
    const info = {
        amount: this.amount,
        investorId: this.investorId,
        projectId: this.projectId
    };


    this.investmentService.newInvestment(info)
      .then((project) => {
          this.oneProject.investments = project.investments;
      })
      .catch((err) => {
          console.log(err);
          console.log('oh no error')
      });
  }


// add new loan
saveNewLoan() {
  const info = {
      amount: this.debtAmount,
      lenderId: this.lenderId,
      projectId: this.projectId
  };


  this.loanService.newLoan(info)
    .then((project) => {
        this.oneProject.debt = project.debt;
    })
    .catch((err) => {
        console.log(err);
        console.log('oh no error')
    });
}






// DELETE project
deleteOneProject(id) {
  //call my apiService's deleteOne function and pass the id as the argument
  this.projectService.deleteOneProject(id)
  .subscribe((deletedProject)=>{});
}

}
