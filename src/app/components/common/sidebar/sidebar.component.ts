import { Component, OnInit } from '@angular/core';
import { DataGeneratorService } from 'src/app/services/data-generator.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private sidebarItems : any;
  private activeItem = null;

  constructor(dataGen:DataGeneratorService) {
    this.sidebarItems = dataGen.createSideBarMenu();
  }

  ngOnInit() {
  }

  onItemClick(index : number){
    this.activeItem = index;
    console.log('item index: ', index);
  }

}
