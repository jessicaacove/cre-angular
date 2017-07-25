import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InvestmentService {

  constructor(
    private http: Http
  ) { }

  // POST camels
  newInvestment(theInvestmentPercentage, projectId, investorId) {

    return this.http
      .post(
        'http://localhost:3000/api/project/' + projectId,

        // Form body information
        {
          investmentPercentage: theInvestmentPercentage,
          project: projectId,
          investor: investorId
        },

        // Send the cookies accross domains
        { withCredentials: true }
      )

      // Parse the JSON
      .map(res => res.json());
  } // close newProject()

}
