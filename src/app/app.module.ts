import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';
import { DeletedonorComponent } from './deletedonor/deletedonor.component';
import { RouterModule,Routes  } from '@angular/router';
import { ViewallComponent } from './viewall/viewall.component';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


const appRoutes : Routes=[
  {
    path:"",component:AdddonorComponent
  },
  {
    path:"search",component:SearchdonorComponent
  },
  {
    path:"delete",component:DeletedonorComponent
  },
  {
    path:"viewall",component:ViewallComponent
  }

]



@NgModule({
  declarations: [
    AppComponent,
    AdddonorComponent,
    NavbarComponent,
    SearchdonorComponent,
    DeletedonorComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
