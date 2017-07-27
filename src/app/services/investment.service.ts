import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class InvestmentService {

  investmentSaveErrorMessage: String;

  constructor(
    private http: Http
  ) { }



  // POST investment to project and investor
  // newInvestment(investmentPercentage, projectId, investorId) {
  //
  //   return this.http
  //     .post(
  //       environment.apiBase + '/api/project/' + projectId,
  //
  //       // Form body information
  //       {
  //         investmentPercentage: investmentPercentage,
  //         investorId: investorId
  //         // investorName:
  //       },
  //
  //       // Send the cookies accross domains
  //       { withCredentials: true }
  //     )
  //     // to promise and if that is successful then post to investor
  //     .toPromise().then((result)=>{
  //       return this.http
  //         .post(
  //           environment.apiBase + '/api/investor/' + investorId,
  //
  //           // Form body information
  //           {
  //             investmentPercentage: investmentPercentage,
  //             projectId: projectId
  //             // projectName: ,
  //             // projectTotalCost:
  //           },
  //
  //           // Send the cookies accross domains
  //           { withCredentials: true }
  //         )
  //         .toPromise().then((result)=>{
  //
  //         }).catch(()=>{
  //           return {investmentSaveErrorMessage: "Investment second post to investor error"}}
  //         )
  //     }).catch(()=>{
  //       return {investmentSaveErrorMessage: "Investment first post to project error"}}
  //     )
  // } // close newProject()


  // POST investment to project and investor
  newInvestment(info) {

    return this.http
      .post(
        environment.apiBase + '/api/investments',

        // Form body information
        {
          amount: info.amount,
          investorId: info.investorId,
          projectId: info.projectId
        },

        // Send the cookies accross domains
        { withCredentials: true }
      )
      // to promise and if that is successful then post to investor
      .toPromise().then((result)=> result.json())
      .catch(()=>{
        return {investmentSaveErrorMessage: "Investment first post to project error"}}
      )
  } // close newProject()

}
