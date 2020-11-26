/* tslint:disable:typedef */
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../helpers/config';
import {Utils} from '../helpers/utils';

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
}
