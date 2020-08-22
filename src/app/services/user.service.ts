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
    if (user.name === 'sanjana' && user.password === 'sanj')
    {
      const access_token = 'mieuh873wu29i02ij9ohj8$6y8320298j4i';
      return {success: true, access_token};
    }
    else {
      return {success: false, message: 'Unauthorized login'};
    }
  }
}
