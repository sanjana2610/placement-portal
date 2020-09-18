import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {Utils} from '../../helpers/utils';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  constructor() { }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnInit(): void {
    this.dtOptions = Utils.getDatatableOptions();
  }

}
