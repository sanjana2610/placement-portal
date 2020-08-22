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
    const res = this.userService.login(this.user);
    if (res.success === true) {
      sessionStorage.setItem('token', res.access_token);
      window.location.href = '/home';
    } else {
      sweetalert('Error', Utils.getError(res), 'error');
    }
  }

  register() {
    this.router.navigateByUrl('/register');
  }
}
