import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';

import { AuthService } from '../services/auth.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-current-projects',
  templateUrl: './current-projects.component.html',
  styleUrls: ['./current-projects.component.css']
})
export class CurrentProjectsComponent implements OnInit {

  picBase = environment.apiBase;
  currentUser: any = {};

  projectArray: any[] = [];

  isShowingForm: boolean = false;

  projectName: string;
  projectType: string;
  projectAddress: string;
  projectTotalCost: number;
  projectMainImage: string;



  projectListError: string;
  projectSaveError: string;


  theUploader = new FileUploader({
    url: this.picBase + '/api/current-projects'
  });

  constructor(
    private projectService: ProjectService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      .then((userFromApi) => {
        this.currentUser = userFromApi;
    this.getProjects();
      })
      .catch(() => {
        this.router.navigate(['/']);
      });
  }

  getProjects() {
    return this.projectService.allProjects()
      .subscribe((allTheProjects) => {
        this.projectArray = allTheProjects;
      },
      () => {
          this.projectListError = 'Sorry, could not find any projects.';
      });
  }

  showNewProjectForm() {
    this.isShowingForm = true;
  }

  hideNewProjectForm() {
    this.isShowingForm = false;
  }

  saveNewProject() {

  //   // if no picture, regular AJAX upload
  //   if (this.theUploader.getNotUploadedItems().length === 0) {
  //     this.saveCamelNoPicture();
  //   }
  //
  //   // else, upload pictures with uploader
  //   else {
  //     this.saveCamelWithPicture();
  //   }
  // } // close saveNewCamel()

    this.theUploader.onBuildItemForm = (item, form) => {
      form.append('projectName', this.projectName);
      form.append('projectType', this.projectType);
      form.append('projectAddress', this.projectAddress);
      form.append('projectTotalCost', this.projectTotalCost);
    }

  this.theUploader.onSuccessItem = (item, response) => {
     const newProjectFromApi = JSON.parse(response);
     this.projectArray.push(newProjectFromApi);
     this.isShowingForm = false;
     this.projectName = "";
     this.projectType = "";
     this.projectAddress = "";
     this.projectTotalCost = undefined;
     this.projectSaveError = "";
  };

  this.theUploader.onErrorItem = (item, response) => {
     this.projectSaveError = "Project save failed.";
  };

  // this is the function that initiates the ajax request
  this.theUploader.uploadAll();



  //   this.projectService.newProject(this.projectName, this.projectType, this.projectAddress, this.projectTotalCost, this.projectMainImage, this.projectDetailImage1, this.projectDetailImage2, this.projectDetailImage3, this.projectDetailImage4)
  //     .subscribe(
  //       (newProjectFromApi) => {
  //         this.projectArray.push(newProjectFromApi);
  //         this.isShowingForm = false;
  //
  //       },
  //
  //       (err) => {
  //         const allErrors = err.json();
  //         console.log(allErrors);
  //       }
  //     )
  // }

  }
}
