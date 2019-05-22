import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/common/header/header.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { ContentComponent } from './components/common/content/content.component';
import { HomeComponent } from './views/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { DynamicTabsComponent } from './components/common/dynamic-tabs/dynamic-tabs.component';
import { OverviewComponent } from './views/overview/overview.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { OrdersComponent } from './views/orders/orders.component';
import { SettingsComponent } from './components/common/settings/settings.component';
import { DummyComponent } from './components/dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    DynamicTabsComponent,
    OverviewComponent,
    TransactionsComponent,
    OrdersComponent,
    SettingsComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
