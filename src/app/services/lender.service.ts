import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';


@Injectable()
export class LenderService {

  constructor(
    private http: Http
  ) { }

  // GET lenders
  allLenders() {
    return this.http
    .get(
      environment.apiBase + '/api/lenders',

      // Send  the cookies across domains
      { withCredentials: true }
    )
    // Parse the JSON
    .map(res => res.json());
  } // close allLenders()



  // POST lenderr
  newLender(theInstitutionName, theContactFirstName, theContactLastName, theEmail, theProjectSizeMin, theProjectSizeMax, theGeographicalArea, theProjectTypes) {
    return this.http
      .post(
        environment.apiBase + '/api/lenders',

        // Form body information
        {
          institutionName: theInstitutionName,
          contactFirstName: theContactFirstName,
          contactLastName: theContactLastName,
          email: theEmail,
          projectSizeMin: theProjectSizeMin,
          projectSizeMax: theProjectSizeMax,
          geographicalArea: theGeographicalArea,
          projectTypes: theProjectTypes
        },

        // Send the cookies accross domains
        { withCredentials: true }
      )

      // Parse the JSON
      .map(res => res.json());
  } // close newLender()



// ___________________________________
// Get lender by id

getOneLender(id) {
  let endPoint = "/lender/" + id
  return this.http
  .get(
    environment.apiBase + '/api' + endPoint,

    // Send  the cookies across domains
    { withCredentials: true }
  )
  // Parse the JSON
  .map(res => res.json());
}

}
