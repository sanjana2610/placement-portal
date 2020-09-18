import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Utils} from '../../helpers/utils';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
    if (!Utils.isLoggedIn()) {
      this.router.navigateByUrl('/');
    } else {
      this.isLoggedIn = true;
    }
  }
  goHome() {
    this.router.navigateByUrl('/home');
  }
  logout () {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  }

}
