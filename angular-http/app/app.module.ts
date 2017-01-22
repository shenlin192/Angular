import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';

import { HeroData }                 from './hero-data';
import { AppComponent }  from './app.component';

import { HeroListComponent } from './toh/hero-list.component';
import { HeroListComponentPromise } from './toh/hero-list.component.promise';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';

@NgModule({
  imports:[
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(HeroData)
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroListComponentPromise,
    WikiComponent,
    WikiSmartComponent
  ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
