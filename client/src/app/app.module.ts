import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<-----------
import { HttpModule } from '@angular/http';    //<-----------
import { MainService } from "./main.service";      //<----------------

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipe } from './filter.pipe';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from './vote/vote.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DashboardComponent,
    FilterPipe,
    CreateComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,        //<-----------
    HttpModule,        //<-----------
  ],
  providers: [MainService],  //<-----------
  bootstrap: [AppComponent]
})
export class AppModule { }
