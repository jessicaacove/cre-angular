import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { ProjectService } from './services/project.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { ProjectByIdComponent } from './project-by-id/project-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CurrentProjectsComponent,
    ProjectByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
