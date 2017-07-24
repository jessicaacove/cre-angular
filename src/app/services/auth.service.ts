import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(
    private myHttp: Http
  ) { }

  // POST signup
  // an argument for each req.body in the api
  signup(theFirstName, theLastName, theEmail, thePassword) {
    return this.myHttp
    .post(
      'http://localhost:3000/api/signup',
      // Form body information to send to the back end (req.body)
      {
        signupFirstName: theFirstName,
        signupLastName: theLastName,
        signupEmail: theEmail,
        signupPassword: thePassword
      },
      // Send the cookies across domains
      {withCredentials: true}
    )
    .toPromise()
    .then(res => res.json())
  }


// POST login
login(theEmail, thePassword) {
  return this.myHttp
  .post(
    'http://localhost:3000/api/login',
    {
      enteredEmail: theEmail,
      enteredPassword: thePassword
    },

    //Send the cookies accross domains
    { withCredentials: true }
  )
  // Convert from observable to promise
  .toPromise()

  // Parse the json
  .then(res => res.json());
} // close login()



  // POST logout
  logout() {
    return this.myHttp
      .post(
        'http://localhost:3000/api/logout',

        // Form body information to send to the bakcend (req.body)
        {},

        // Send the cookies accross domains
        { withCredentials: true }
      )

      // Convert from observable to promise
      .toPromise()

      // Parse the json
      .then(res => res.json());
  }



  // GET checklogin
  checklogin() {
    return this.myHttp
      .get(
        'http://localhost:3000/api/checklogin',

        // Send the cookies accross domains
        { withCredentials: true }
      )

      // Convert from observable to promise
      .toPromise()

      // Parse the json
      .then(res => res.json());
  } // close checklogin()
}
