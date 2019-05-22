import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHandlerService {

  private users : any

  constructor() { 
    //Initialize some dummy data regarding Users. 
    this.users  = [
      {
        first_name: 'Ardian',
        last_name: 'Ibrahimi',
        username:'ardianche',
        password:'Z2FtZW9mVGhyb25lcw==', //Base64 encoded string,
        permission:{
          views:[
            {
              name:'Overview',
              templateUrl: null,
              readOnly:false, //For further dive
              hidden:false,
            },
            {
              name:'Transactions',
              templateUrl: null,
              readOnly:true,
              hidden:false,
            },
            {
              name:'Orders',
              templateUrl: null,
              readOnly:false,
              hidden:false,
            },
          ]
        }
      },
      {
        first_name: 'Tyrion',
        last_name: 'Lannister',
        username:'theImp',
        password:'Z2FtZW9mVGhyb25lcw==', //Base64 encoded string,
        permission:{
          views:[
            {
              name:'Overview',
              templateUrl: null,
              readOnly:true, //For further dive
              hidden:false,
            },
            {
              name:'Transactions',
              templateUrl: null,
              readOnly:false,
              hidden:true,
            },
            {
              name:'Orders',
              templateUrl: null,
              readOnly:false,
              hidden:true,
            },
          ]
        }
      }
    ]
    localStorage.setItem('users',JSON.stringify(this.users));
  }

  userLogIn(user: any){
    localStorage.setItem('loggedInUser',JSON.stringify(user));
  }
  userLogOut(user:any){
    localStorage.removeItem('loggedInUser');
  }

  authenticateUserPrivilege(view:string){
    let activeUser = JSON.parse(localStorage.getItem('loggedInUser'));
    let showView = activeUser.permission.views.find(item => item.name == view).hidden;
    let operations = activeUser.permission.views.find(item => item.name == view).readOnly;

    console.log('show view: ', showView,  view)
    if(!showView){
      return true;
    }
    if(showView){
      return 'No Access';
    }
    else if(showView && !operations){
      return 'Read Only';
    }else{
      return true;
    }
  }
}
