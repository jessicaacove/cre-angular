import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { ProjectByIdComponent } from './project-by-id/project-by-id.component';
import { InvestorListComponent } from './investor-list/investor-list.component';
import { InvestorByIdComponent } from './investor-by-id/investor-by-id.component';
import { LenderListComponent } from './lender-list/lender-list.component';
import { LenderByIdComponent } from './lender-by-id/lender-by-id.component';

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
  },
  {
    path: 'investors',
    component: InvestorListComponent
  },
  {
    path: 'investor/:id',
    component: InvestorByIdComponent
  },
  {
    path: 'lenders',
    component: LenderListComponent
  },
  {
    path: 'lender/:id',
    component: LenderByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
