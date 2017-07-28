import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { LenderService } from '../services/lender.service';

@Component({
  selector: 'app-lender-by-id',
  templateUrl: './lender-by-id.component.html',
  styleUrls: ['./lender-by-id.component.css']
})
export class LenderByIdComponent implements OnInit {

  currentUser: any = undefined;

  lenderDetailsError: String;

  oneLender: any = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
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
        this.getLenderById(params.id);
      })
  }

  getLenderById(id) {
    this.lenderService.getOneLender(id)
      .subscribe((lenderbyid) => {
        this.oneLender = lenderbyid;
      },
      () => {
        this.lenderDetailsError = 'Sorry, could not find any lenders.';
      });
  }



  }
