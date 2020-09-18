import {Router} from '@angular/router';
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {Utils} from '../../helpers/utils';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  allJobs = true;
  constructor(public router: Router) { }
  ngOnInit(): void {
    this.dtOptions = Utils.getDatatableOptions();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  goHome() {
    this.allJobs = true;
    this.router.navigateByUrl('/home');
  }
  myJobs() {
    this.allJobs = false;
  }
  companyDetails(company) {
    this.router.navigateByUrl('/company/?company='+company);
  }
  apply() {
    this.router.navigateByUrl('/job');
  }
}
