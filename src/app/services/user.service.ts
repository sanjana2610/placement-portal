/* tslint:disable:typedef */
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {User} from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../helpers/config';
import {Utils} from '../helpers/utils';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }
  login(user: User) {
    return this.http.get(
      Config.apiURL + '/login?email='+user.email+'&password='+user.password,
    ).pipe(
      catchError(Utils.handleErrors)
    );
  }
}
