import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any = false;

  logoutErrorMessage: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      .then((userFromApi) => {
        this.currentUser = userFromApi;
      })
      .catch(() => {
        this.router.navigate(['/']);
      });
  }

  logOut() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/']);
        this.currentUser = "";
      })
      .catch(() => {
        this.logoutErrorMessage = 'Logout failed';
      });
  }

}
