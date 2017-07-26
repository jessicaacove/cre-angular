import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class InvestorServiceService {

  constructor(
    private http: Http
  ) { }

  // GET investors
  allInvestors() {
    return this.http
    .get(
      environment.apiBase + '/api/investors',

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
        environment.apiBase + '/api/investors',

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
