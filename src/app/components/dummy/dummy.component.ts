import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  @Input() data : any;
  @Input() origin: any;

  private buttonPrivilege : boolean;

  constructor() { }

  ngOnInit() {
    let userObject = JSON.parse(localStorage.getItem('loggedInUser'));
    userObject.permission.views.forEach(item => {
      if(item.name == origin){
        if(item.readOnly == true){
          this.buttonPrivilege = false;
        }else{
          this.buttonPrivilege = true;
        }
      }else{
        this.buttonPrivilege = false;
      }
    });
    console.log('button privilege', this.buttonPrivilege);
  }

}
