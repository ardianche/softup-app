import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {

  @Input()
  issue : any;

  constructor() { }

  ngOnInit() {
    console.log('issue : ', this.issue);
  }

}
