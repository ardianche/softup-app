import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './GithubService';
import { Apollo, APOLLO_OPTIONS,ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';

describe('GithubService', () => {
  let injector: TestBed;
  let githubInstance: GithubService;
  let httpMock: Apollo;
  let httpInstance : HttpLink;
  let condition :boolean;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpLinkModule,ApolloModule],
      providers:[HttpClientModule,HttpLinkModule,ApolloModule],
    });

    injector = getTestBed();
    httpMock = injector.get(Apollo);
    httpInstance = injector.get(HttpLink);
    httpMock.create({
        link: httpInstance.create({ uri: 'https://api.github.com/graphql?access_token='+'792d8b29392598'+'d27d93c48692f9ae'+'63d37e091e',method:'POST',withCredentials:false}),
        cache: new InMemoryCache(),
        defaultOptions: {
          query: {
            fetchPolicy:'no-cache'
          }
        }
    });
    githubInstance = new GithubService(httpMock);
    condition = true;
  });
  it('should return query',()=>{
    expect(githubInstance.getQuery(null,null) != null);
  });
  it('should return more than 0 values',()=>{
    let issueQueryResult;
    githubInstance.getIssues().then((res)=>{
        console.log('res is : ', res);
        issueQueryResult = res;
    }).catch(err => {
        console.log('error is : ',err);
    });
    console.log('issue query result L', issueQueryResult);
    expect(issueQueryResult.length >0);
  });
//   it('should not return an empty array',async ()=>{
//       let issueSearchResult = await service.getIssues();
//       expect(issueSearchResult.length >0);
//   });
});