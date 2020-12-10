import {Router} from '@angular/router';
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {Utils} from '../../helpers/utils';
import {Jobs} from '../../models/jobs';
import {JobsService} from  '../../services/jobs.service'
import sweetalert from 'sweetalert';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [JobsService]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  allJobs = true;
  jobs: Array<Jobs> = [];
  jobApplying: Jobs = new Jobs();
  constructor(public router: Router, private jobsService: JobsService) { }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnInit(): void {
    this.dtOptions = Utils.getDatatableOptions();
    this.jobsService.getJobs().subscribe(
      res => {
        this.jobs = res['jobs'];
        Utils.rerender(this.dtElement, this.dtTrigger);
      }, err =>{
      sweetalert('Error', Utils.getError(err), 'error');
    }
    );
  }
  goHome() {
    this.allJobs = true;
    this.ngOnInit();
  }
  myJobs() {
    this.allJobs = false;
    this.jobsService.appliedJobs().subscribe(
      res => {
        this.jobs = res['jobs'];
        Utils.rerender(this.dtElement, this.dtTrigger);
      }, err =>{
        sweetalert('Error', Utils.getError(err), 'error');
      }
    );
  }
  companyDetails(company) {
    this.router.navigateByUrl('/company/?company='+company);
  }
  apply(id) {
    this.jobApplying.job_id=id;
    this.jobsService.apply(this.jobApplying).subscribe(
      res => {
        sweetalert('Success', res['message'], 'success');
      }, err =>{
        sweetalert('Error', Utils.getError(err), 'error');
      }
    );
  }
}
