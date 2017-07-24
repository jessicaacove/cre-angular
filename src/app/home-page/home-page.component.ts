import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  firstNameValue: string;
  lastNameValue: string;
  emailValue: string;
  passwordValue: string;

  loginEmail: string;
  loginPassword: string;

  errorMessage: string;
  loginErrorMessage: string;

  isLoggedOut: boolean = false;
  isShowingForm: boolean = false;
  isShowingSignIn: boolean = true;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      .then((resultFromApi) => {
        this.router.navigate(['/current-projects']);
      })
      // Even if you don't do anything on error, catch to avoid a console error
      .catch((err) => {
        this.isLoggedOut = true;
      });
  }

  showSignUpForm() {
  this.isShowingForm = true;
  this.isShowingSignIn = false;
  }

  showSignInForm() {
  this.isShowingForm = false;
  this.isShowingSignIn = true;
  }

  doSignUp() {
    this.auth.signup(this.firstNameValue, this.lastNameValue, this.emailValue, this.passwordValue)
      .then((resultFromApi) => {
        // clear form
        this.firstNameValue = "";
        this.lastNameValue = "";
        this.emailValue = "";
        this.passwordValue = "";

        // clear error message
        this.errorMessage = "";

        //redirect to camels
        this.router.navigate(['/current-projects']);
      })
      .catch((err) => {
        const parsedError = err.json();
        this.errorMessage = parsedError.message;
      });
  }

  doLogin() {
    this.auth.login(this.loginEmail, this.loginPassword)
      .then((resultFromApi) => {
        this.loginEmail = "";
        this.loginPassword = "";

        // clear error message
        this.loginErrorMessage = "";

        // redirect to /camels
        this.router.navigate(['/current-projects']);
      })
      .catch((err) => {
        const parsedError = err.json();
        this.loginErrorMessage = parsedError.message;
      });
  }
}
