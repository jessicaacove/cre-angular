import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

@Injectable()
export class ProjectService {

  constructor(
    private http: Http
  ) { }


  // POST camels
  // newProject(theProjectName, theProjectType, theProjectAddress, theProjectTotalCost, theProjectMainImage, theProjectDetailImage1, theProjectDetailImage2, theProjectDetailImage3, theProjectDetailImage4) {
  //   return this.http
  //     .post(
  //       'http://localhost:3000/api/current-projects',
  //
  //       // Form body information
  //       {
  //         projectName: theProjectName,
  //         projectType: theProjectType,
  //         projectAddress: theProjectAddress,
  //         projectTotalCost: theProjectTotalCost,
  //         projectMainImage: theProjectMainImage,
  //         projectDetailImage1: theProjectDetailImage1,
  //         projectDetailImage2: theProjectDetailImage2,
  //         projectDetailImage3: theProjectDetailImage3,
  //         projectDetailImage4: theProjectDetailImage4
  //       },
  //
  //       // Send the cookies accross domains
  //       { withCredentials: true }
  //     )
  //
  //     // Parse the JSON
  //     .map(res => res.json());
  // } // close newProject()

  // GET camels
  allProjects() {
    return this.http
    .get(
      environment.apiBase + '/api/current-projects',

      // Send  the cookies across domains
      { withCredentials: true }
    )
    // Parse the JSON
    .map(res => res.json());
  } // close allProjects()



// ----------------------------------------------------------
// Project details page

  // GET Project details page
  getOneProject(id) {
    let endPoint = "/project/" + id
    return this.http
    .get(
      environment.apiBase + '/api' + endPoint,

      // Send  the cookies across domains
      { withCredentials: true }
    )
    // Parse the JSON
    .map(res => res.json());
  }

  deleteOneProject(id) {
    let endPoint = "/project/" + id
    return this.http
    .delete(
      environment.apiBase + '/api' + endPoint)
  }
}
