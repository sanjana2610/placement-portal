import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { FacComponent } from './components/fac/fac.component';
import { ScheduleCompanyComponent } from './components/schedule-company/schedule-company.component';
import { StudentsComponent } from './components/students/students.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { CollegesComponent } from './components/colleges/colleges.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCollegeComponent } from './components/add-college/add-college.component';
import { CompaniesComponent } from './components/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    IndexComponent,
    NavBarComponent,
    SideBarComponent,
    CompanyDetailsComponent,
    JobApplicationComponent,
    FacComponent,
    ScheduleCompanyComponent,
    StudentsComponent,
    NotificationComponent,
    AddJobComponent,
    CollegesComponent,
    AddCompanyComponent,
    AddCollegeComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
