import { BrowserModule } from '@angular/platform-browser';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { ColSmDirective } from 'ng2-bootstrap-grid';
import { ColMdDirective } from 'ng2-bootstrap-grid';
import { ColLgDirective } from 'ng2-bootstrap-grid';

import { AuthService } from './services/auth.service';
import { ProjectService } from './services/project.service';
import { InvestorServiceService } from './services/investor-service.service';
import { InvestmentService } from './services/investment.service';
import { LenderService } from './services/lender.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { ProjectByIdComponent } from './project-by-id/project-by-id.component';
import { InvestorListComponent } from './investor-list/investor-list.component';
import { LenderListComponent } from './lender-list/lender-list.component';
import { HeaderComponent } from './header/header.component';
import { InvestorByIdComponent } from './investor-by-id/investor-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CurrentProjectsComponent,
    ProjectByIdComponent,
    InvestorListComponent,
    LenderListComponent,
    ColSmDirective,
    ColMdDirective,
    ColLgDirective,
    HeaderComponent,
    InvestorByIdComponent

  ],
  imports: [
    BootstrapGridModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FileUploadModule
  ],
  providers: [
    AuthService,
    ProjectService,
    InvestorServiceService,
    InvestmentService,
    LenderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
