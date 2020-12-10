/* tslint:disable:typedef */
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../helpers/config';
import {Utils} from '../helpers/utils';
import {Jobs} from '../models/jobs';

@Injectable()
export class JobsService {

  constructor(private http: HttpClient) {
  }
  getJobs() {
    return this.http.get(
      Config.apiURL + '/jobs',
    ).pipe(
      catchError(Utils.handleErrors)
    );
  }
  apply(job: Jobs) {
    return this.http.get(
      Config.apiURL + '/applyJob?job_id='+job.job_id,
    ).pipe(
      catchError(Utils.handleErrors)
    );
  }
  appliedJobs() {
    return this.http.get(
      Config.apiURL + '/appliedJobs',
    ).pipe(
      catchError(Utils.handleErrors)
    );
  }
}
