import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InvestorServiceService {

  constructor(
    private http: Http
  ) { }

  // GET investors
  allInvestors() {
    return this.http
    .get(
      'http://localhost:3000/api/investors',

      // Send  the cookies across domains
      { withCredentials: true }
    )
    // Parse the JSON
    .map(res => res.json());
  } // close allInvestors()


  // POST investor
  newInvestor(thefirstName, thelastName, theemail) {
    return this.http
      .post(
        'http://localhost:3000/api/investors',

        // Form body information
        {
          firstName: thefirstName,
          lastName: thelastName,
          email: theemail
        },

        // Send the cookies accross domains
        { withCredentials: true }
      )

      // Parse the JSON
      .map(res => res.json());
  } // close newInvestor()
}
