import { Component, OnInit } from '@angular/core';
import {JobsService} from '../../services/jobs.service';
import {Jobs} from '../../models/jobs';
import {Utils} from '../../helpers/utils';
import sweetalert from 'sweetalert';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css'],
  providers: [JobsService]
})
export class JobApplicationComponent implements OnInit {
  jobs: Array<Jobs> = [];
  constructor(public router: Router, private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe(
      res => {
        this.jobs = res['jobs'];
      }, err =>{
        sweetalert('Error', Utils.getError(err), 'error');
      }
    );
  }
  apply() {
  }
}
