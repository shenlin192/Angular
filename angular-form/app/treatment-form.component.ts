import {
  Component,
  trigger,
  animate,
  transition,
  state,
  style
  } from '@angular/core';
import { FormStateService } from './form-state.service';
import { FormDataService } from './form-data.service';

@Component({
  selector:'treatment-form',
  moduleId: module.id,
  templateUrl: 'treatment-form.component.html',
  animations:[
    trigger('formState',[
      state('2',style(
        {opacity:1}
      )),
      state('1',style(
        {opacity:0, display: 'none'}
      )),
      state('0',style(
        {opacity:0 , display: 'none'}
      )),
      transition('1 => 2', animate('1000ms ease-in')),
      transition('2 => 1', animate('0ms')),
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class TreatmentFormComponent {
  constructor(
    private formStateService:FormStateService,
    private formDataService: FormDataService
  ){}

  treatmentTypes = this.formDataService.treatmentTypes;

  getTreatments(){
    return this.formDataService.currentTreatments;
  }

  //treatments =  this.formDataService.currentTreatments;


  deleteTreatment(index: number){
    console.log(index);
    this.formDataService.deleteTreatment(index);
    console.log( this.getTreatments())
  }

  newTreatment(){
    this.formDataService.newTreatment();
  }

  getTreatmentHeaders():string[]{
    return this.formDataService.getCurrentTreatmentHeader();
  }

  getState(){
    return this.formStateService.state;
  }

  changeState(state: number){
    this.formStateService.changeState(state)
  }

  trackByIndex(index: number) {
    return index;
  }

}
