import { Component, OnInit, NgModule } from '@angular/core';
import { GithubService } from 'src/app/services/GithubService';
import { FormsModule } from '@angular/forms';
import { Apollo } from 'apollo-angular';

@NgModule({
  imports:[
    FormsModule,
  ],
  providers:[GithubService,Apollo],
})

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  public issues:[];

  public searchKey : any = "";
  public index : any = "";
  public loading :boolean = false;
  public selectedIssue : any = null;
  
  constructor(private githubService : GithubService) { 
  }

  async ngOnInit() {
    this.loading = true;
    this.issues =  await this.githubService.getIssues();
    this.loading = false;
  }

  async onInputChange(val){
    this.issues = await this.githubService.getIssues(this.searchKey);
  }

  async onButtonSelection(index){
    this.loading = true;
    this.index = index;
    console.log('test: ', this.index);

    this.issues = await this.githubService.getIssues(this.searchKey,this.index);
    this.loading = false;
  }
  
  selectIssue(index){
    console.log('index: ',index);
    console.log('this issue : ', this.issues[index]);
    this.selectedIssue = index;
  }
}
