import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onAccountSelect : EventEmitter<string>;

  constructor() { 
    this.onAccountSelect = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  openSettingsBar(){
    console.log('test');
    this.onAccountSelect.emit('open');
    console.log('test');
  }
}
