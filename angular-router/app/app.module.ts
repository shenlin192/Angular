import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component1} from './component1.component';
import {Component2} from './component2.component';
import {Component3} from './component3.component';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  declarations: [ AppComponent,Component1, Component2,Component3],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
