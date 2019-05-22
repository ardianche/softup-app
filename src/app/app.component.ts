import { Component } from '@angular/core';
import { AuthenticationHandlerService } from './services/authentication-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ucx-app';
  constructor(auth: AuthenticationHandlerService){
    
  }
}
