import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {Utils} from '../../helpers/utils';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit, AfterViewInit  {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  company = '';
  constructor( private route: ActivatedRoute) { }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnInit(): void {
    this.dtOptions = Utils.getDatatableOptions();
    this.route.queryParams.subscribe(params => {
      this.company = params['company'];
      console.log(this.company);
    });
  }

}
