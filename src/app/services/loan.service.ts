import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class LoanService {

  debtSaveErrorMessage: String;

  constructor(
    private http: Http
  ) { }





  // POST loan to project and lender
  newLoan(info) {

    return this.http
      .post(
        environment.apiBase + '/api/loans',

        // Form body information
        {
          debtAmount: info.amount,
          lenderId: info.lenderId,
          projectId: info.projectId
        },

        // Send the cookies accross domains
        { withCredentials: true }
      )
      // to promise and if that is successful then post to investor
      .toPromise().then((result)=> result.json())
      .catch(()=>{
        return {debtSaveErrorMessage: "Investment first post to project error"}}
      )
  } // close newDebt()

}
