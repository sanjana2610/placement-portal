/* tslint:disable:typedef */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import sweetalert from 'sweetalert';
import {Utils} from '../../helpers/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }
  register(modelUser: User) {
    const alphaExp = /^[0-9a-zA-Z| ]+$/;
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(modelUser.name && modelUser.name.match(alphaExp)) {
      if(modelUser.password && modelUser.password.length>8) {
        if(modelUser.mobile.length === 10) {
          if(modelUser.role) {
            if(modelUser.email && modelUser.email.match(email)) {
              sweetalert('Success', 'Correct data', 'success');
            } else {
              sweetalert('Error', 'Enter proper email', 'error');
            }
          } else {
            sweetalert('Error', 'Choose your role', 'error');
          }
        } else {
          sweetalert('Error', 'Enter proper phone number', 'error');
        }
      } else {
        sweetalert('Error', 'Enter password with at least 9 characters', 'error');
      }
    } else {
      sweetalert('Error', 'Enter user name which contains only alphanumeric characters', 'error');
    }
  }
  login() {
    this.router.navigateByUrl('/login');
  }
  index() {
    this.router.navigateByUrl('/');
  }
}
