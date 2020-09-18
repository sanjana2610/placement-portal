/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  register() {
    this.router.navigateByUrl('/register');
  }
  login() {
    this.router.navigateByUrl('/login');
  }
  index() {
    this.router.navigateByUrl('/');
  }
}
