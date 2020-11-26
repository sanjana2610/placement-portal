/* tslint:disable:typedef */
import {Component, OnInit} from '@angular/core';
import sweetalert from 'sweetalert';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {Utils} from '../../helpers/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, public router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user).subscribe(
      res => {
        sessionStorage.setItem('token', res['access_token']);
        window.location.href = '/home';
      }, err => {
        sweetalert('Error', Utils.getError(err), 'error');
      }
    );
  }

  register() {
    this.router.navigateByUrl('/register');
  }
  index() {
    this.router.navigateByUrl('/');
  }
}
