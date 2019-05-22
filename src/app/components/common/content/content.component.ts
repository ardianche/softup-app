import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { AuthenticationHandlerService } from 'src/app/services/authentication-handler.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private menuItems : any;
  private selectedView : any;
  private authenticationInstance : AuthenticationHandlerService;

  constructor(auth: AuthenticationHandlerService) {
    this.authenticationInstance = auth;
  }

  ngOnInit() {
    
    
    this.menuItems = [
      {
        name : "Overview",
        index:0,
        componentIdentifier: 'app-content-overview'
      },
      {
        name : "Transactions",
        index:1,
        componentIdentifier: 'app-content-transactions'
      },
      {
        name : "Orders",
        index:2,
        componentIdentifier: 'app-content-orders'
      }
    ]

    //Initialize the first view : 

    let user = JSON.parse(localStorage.getItem('users'))[0];

    this.authenticationInstance.userLogIn(user);

    this.selectedView = this.menuItems.filter((item)=>{
      console.log('user', user);
      return item.name == user.permission.views.find((view)=> view.hidden == false).name;
    })[0];
  }
  itemSelectionHandler(event: any){
    console.log('event: ',event);
    this.selectedView = event;
  }

}
