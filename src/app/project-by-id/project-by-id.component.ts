import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-by-id',
  templateUrl: './project-by-id.component.html',
  styleUrls: ['./project-by-id.component.css']
})
export class ProjectByIdComponent implements OnInit {

  currentUser: any = {};

  projectById: any = {};


  logoutErrorMessage: string;
  projectDetailsError: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      .then((userFromApi) => {
        this.currentUser = userFromApi;
    this.getProjectById();
      })
      .catch(() => {
        this.router.navigate(['/']);
      });
  }

  logOut() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(() => {
        this.logoutErrorMessage = 'Logout failed';
      });
  }

  getProjectById() {
    return this.projectService.oneProject()
      .subscribe((projectById) => {
        this.projectById = projectById;
      },
      () => {
          this.projectDetailsError = 'Sorry, could not find any projects.';
      });
  }

}
