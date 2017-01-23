import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import {HeroFormComponent} from './config-form.component';
import { TypeFormComponent } from './type-form.component'
import { TreatmentFormComponent } from './treatment-form.component'
import { TreatmentComponent } from './treatment.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeroFormComponent,
    TypeFormComponent,
    TreatmentFormComponent,
    TreatmentComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
