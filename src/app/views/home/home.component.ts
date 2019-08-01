import { Component, OnInit, EventEmitter } from '@angular/core';
import { GithubService } from 'src/app/services/GithubService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private eventEmitter: EventEmitter<string>;
  private settings : any;

  constructor() { 
    this.eventEmitter = new EventEmitter<string>();
    this.settings = false;

  }

  ngOnInit() {
  }

  openSettings(){
    if(this.settings){
      this.settings = false;
    }else{
      this.settings = true;
    }
  }
}
