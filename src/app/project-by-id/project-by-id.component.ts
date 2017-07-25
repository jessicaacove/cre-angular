import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { ProjectService } from '../services/project.service';
import { InvestorServiceService } from '../services/investor-service.service';
import { InvestmentService } from '../services/investment.service';

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

  logoutErrorMessage: string;
  projectDetailsError: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private projectService: ProjectService,
    private investorService: InvestorServiceService,
    private investmentService: InvestmentService
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
      })

      this.investorService.allInvestors().subscribe( (result) => this.investorArray = result);
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

  getProjectById(id) {
    this.projectService.getOneProject(id)
      .subscribe((projectById) => {
        this.oneProject = projectById;
      },
      () => {
        this.projectDetailsError = 'Sorry, could not find any projects.';
      });
  }

  saveNewInvestment() {
    this.investment.project = this.oneProject._id;
    this.investment.investmentPercentage;
  console.log("--------------------------------" + this.investment.investor);

    this.investmentService.newInvestment(this.investment.investmentPercentage, this.investment.project, this.investment.investor)
      .subscribe(
        (newInvestmentFromApi) => {
          this.investmentArray.push(newInvestmentFromApi);
        },

        (err) => {
          const allErrors = err.json();
          console.log(allErrors);
        }
      )
  }

}
