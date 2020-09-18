import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
  slide = 1;
  constructor() { }

  ngOnInit(): void {
  }
  next() {
    this.slide +=1;
  }
  previous() {
    this.slide -=1;
  }
}
