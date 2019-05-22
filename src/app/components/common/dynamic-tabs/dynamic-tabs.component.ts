import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { AuthenticationHandlerService } from 'src/app/services/authentication-handler.service';


@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.scss']
})
export class DynamicTabsComponent implements OnInit {

  @Input() menu : any;
  @Output() itemSelection = new EventEmitter<string>();

  private authenticationInstance : AuthenticationHandlerService;

  private activeItem: number;

  constructor(auth: AuthenticationHandlerService) { 
    this.authenticationInstance = auth;
  }

  ngOnInit() {
    this.activeItem = 0;
  }

  selectItem(index: number){
    this.activeItem = index;
    console.log('menu : ',this.menu);
    console.log('index: ', index);
    this.itemSelection.emit(this.menu.find(item => item.index == index));
    console.log('test');
  }

  hasPrivilege(view: string){
    let response = this.authenticationInstance.authenticateUserPrivilege(view);
    console.log('response : ', response);
    return response;
  }
}
