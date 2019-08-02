import { Component, OnInit, EventEmitter } from '@angular/core';
import { GithubService } from 'src/app/services/GithubService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public eventEmitter: EventEmitter<string>;
  public settings : any;

  constructor() { 
    this.eventEmitter = new EventEmitter<string>();
  }

  ngOnInit() {
  }
}
