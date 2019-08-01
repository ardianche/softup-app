import { Apollo, Subscription } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubService {
    constructor(private apollo : Apollo){
    }
    public async getIssues(searchKey : string = null, issueStatus : string = null) : Promise<any>{
            console.log('searchkey : ',searchKey,' issueStatus : ',issueStatus)
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

                return new Promise((resolve,reject)=>{
                    this.apollo.query({
                        query:issueQuery
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
                    });
                })

    }
}