import { Apollo, Subscription } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
  private apollo : Apollo;
    constructor(apolloInstance : Apollo){
      this.apollo = apolloInstance;
    }
    public async getIssues(searchKey : string = null, issueStatus : string = null) : Promise<any>{
            console.log('searchkey : ',searchKey,' issueStatus : ',issueStatus);
                console.log('this apollo is: ',this.apollo);
                return new Promise((resolve,reject)=>{
                    this.apollo.query({
                        query:this.getQuery(searchKey,issueStatus)
                    }).toPromise().then((res : any)=>{
                        resolve(res.data.search.edges.map(item =>{
                          if(item.node.createdAt != null){
                            return {
                              createdAt: item.node.createdAt,
                              title: item.node.title,
                              url : item.node.url,
                              body: item.node.body,
                              comments: !!item.node.comments && item.node.comments.nodes
                            }
                          }
                        }));
                    }).catch((err)=>{
                      console.log('error inside get issues',err);
                    });
                })

    }

    public getQuery(searchKey:string = null, issueStatus :string = null) : any {
      let issueQuery =  
            gql`
            {
                search(first: 100, type:ISSUE, query: "user:angular repo:angular ${!!searchKey && searchKey || ''} is:issue state:${!!issueStatus && issueStatus.toLowerCase() || 'open'}") {
                  edges {
                    node {
                      ... on Issue {
                        createdAt
                        title
                        body
                        url
                        comments(first:100){
                          nodes {
                            body
                            author {
                              login
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
                `;
                return issueQuery;
    }
    public rxJsIssue(searchKey : string, issueStatus:string){
      let issueQuery =  
            gql`
            {
                search(first: 100, type:ISSUE, query: "user:angular repo:angular ${!!searchKey && searchKey || ''} is:issue state:${!!issueStatus && issueStatus.toLowerCase() || 'open'}") {
                  edges {
                    node {
                      ... on Issue {
                        createdAt
                        title
                        body
                        url
                        comments(first:100){
                          nodes {
                            body
                            author {
                              login
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
                `;

        // let observableInstance = new Observable<any>();
        // let loading = false;
        // observableInstance = this.apollo.query({
        //   query:issueQuery
        // }).pipe(tap())
    }
}