import { Component } from '@angular/core';
import {Utils} from './helpers/utils';
import {Router} from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  isLoggedIn = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!Utils.isLoggedIn()) {
      this.router.navigateByUrl('/');
    } else {
      this.isLoggedIn = true;
    }
  }
}
