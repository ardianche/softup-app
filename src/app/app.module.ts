import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import {InMemoryCache, HeuristicFragmentMatcher} from 'apollo-cache-inmemory';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/common/header/header.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { ContentComponent } from './components/common/content/content.component';
import { HomeComponent } from './views/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { DynamicTabsComponent } from './components/common/dynamic-tabs/dynamic-tabs.component';
import { SettingsComponent } from './components/common/settings/settings.component';
import {GithubService} from './services/GithubService';
import {IssueListComponent} from './components/issue-list/issue-list.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    DynamicTabsComponent,
    SettingsComponent,
    IssueListComponent, IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,

  ],
  providers: [
    GithubService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { 
    //DI for apollo and Http client module : 
    constructor(apollo : Apollo, http : HttpLink){
      console.log('process : env' + JSON.stringify(environment));
      apollo.create({
        link: http.create({ uri: 'https://api.github.com/graphql?access_token='+'792d8b2939259'+'8d27d93c4869'+'2f9ae63d37e091e',method:'POST',withCredentials:false}),
        cache: new InMemoryCache(),
        defaultOptions: {
          query: {
            fetchPolicy:'no-cache'
          }
        }
      });
    }
}
