import { Component, OnInit } from '@angular/core';
import { DataGeneratorService } from 'src/app/services/data-generator.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  private dataGen : DataGeneratorService;
  private fakeData: any;

  constructor(dataGen : DataGeneratorService) { 
    this.dataGen = dataGen;
  }

  ngOnInit() {
    this.fakeData = this.dataGen.createDummyData();
  }

}
