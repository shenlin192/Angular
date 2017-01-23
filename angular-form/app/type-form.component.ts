import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { FormStateService } from './form-state.service'
import { FormDataService } from './form-data.service'

@Component({
  selector:'type-form',
  moduleId: module.id,
  template: `
<div class="container" [@formState]="getState()">
  <h1>hello type</h1>
  <form  #typeForm="ngForm" name="myType" novalidate>

    <div class="form-group">
      <label for="type">Power</label>
      <select id="type" required class="form-control" (change)="changeType($event.target.value)">
        <option *ngFor="let type of types" [value]="type">{{type}}</option>
      </select>
    </div>

    <button  class="btn btn-default" type="submit" (click)="changeState(0)">Previous</button>
    <button  class="btn btn-default" type="submit" (click)="changeState(2)"
             [disabled]="!typeForm.form.valid">Next</button>

  </form>
</div>
`,
  animations:[
    trigger('formState',[
      state('1',style(
        {opacity:1}
      )),
      state('0',style(
        {opacity:0, display: 'none'}
      )),
      state('2',style(
        {opacity:0 , display: 'none'}
      )),
      transition('0 => 1', animate('1000ms ease-in')),
      transition('1 => 0', animate('0ms')),
      transition('1 => 2', animate('0ms')),
      transition('2 => 1', animate('1000ms ease-out'))
    ])
  ]
})

export class TypeFormComponent {
  constructor(
    private formStateService: FormStateService,
    private formDataService: FormDataService
  ){}

  types = this.formDataService.types;

    /*
  getType(){
    return this.formDataService.currentType;
  }*/

  changeType(type: string){
   // if(this.getType() !== type ){
        this.formDataService.changeType(type);
   // }
  }

  getState(){
    return this.formStateService.state;
  }

  changeState(state: number){
    this.formStateService.changeState(state)
  }

}
