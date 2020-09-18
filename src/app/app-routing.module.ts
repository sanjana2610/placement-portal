import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {IndexComponent} from './components/index/index.component';
import {CompanyDetailsComponent} from './components/company-details/company-details.component';
import {JobApplicationComponent} from './components/job-application/job-application.component';
import {FacComponent} from './components/fac/fac.component';
import {ScheduleCompanyComponent} from './components/schedule-company/schedule-company.component';
import {StudentsComponent} from './components/students/students.component';
import {NotificationComponent} from './components/notification/notification.component';
import {AddJobComponent} from './components/add-job/add-job.component';
import {CollegesComponent} from './components/colleges/colleges.component';
import {AddCompanyComponent} from './components/add-company/add-company.component';
import {AddCollegeComponent} from './components/add-college/add-college.component';
import {CompaniesComponent} from './components/companies/companies.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'company/:company', component: CompanyDetailsComponent},
  {path: 'job', component: JobApplicationComponent},
  {path: 'faq', component: FacComponent},
  {path: 'schedule-company', component: ScheduleCompanyComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'email-notification', component: NotificationComponent},
  {path: 'add-job', component: AddJobComponent},
  {path: 'colleges', component: CollegesComponent},
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'add-college', component: AddCollegeComponent},
  {path: 'companies', component: CompaniesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
