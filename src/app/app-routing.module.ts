import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { ProjectByIdComponent } from './project-by-id/project-by-id.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'current-projects',
    component: CurrentProjectsComponent
  },
  {
    path: 'project/:id',
    component: ProjectByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
