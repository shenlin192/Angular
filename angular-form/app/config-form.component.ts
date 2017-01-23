import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  group
} from '@angular/core';

import { Hero } from './hero';
import { FormStateService } from './form-state.service';
import { FormDataService } from './form-data.service';

@Component({
  moduleId: module.id,
  selector:'config-form',
  templateUrl:'config-form.component.html',
  styleUrls:['config-form.component.css'],
  animations: [
    trigger('formState', [

      //1 Final value
     state('0', style({
        //opacity: 1
      })),

      state('1',   style({
        display: 'none'
      })),

      state('2',style({
        display: 'none'
      })),

      //Transition and animation will not change the final state value
      transition('0 => *',[
        //2 start value of transition
        style({position:'absolute', opacity: 1}),
        //3 transition value of transition
        group([
          // duration delay time-function
          animate('3s 0.1s ease', style({
            transform: 'translateX(1000px)',
          })),
          animate('3s ease', style({
            opacity: 0
          })),
        ])
      ]),
      transition('* => 0',[
        style({ transform: 'translateX(-1000px)', opacity: 0}),
        group([
          animate('3s 0.1s ease', style({
            transform: 'translateX(0px)',
          })),
          animate('3s ease', style({
            opacity: 1
          })),
        ])
      ]),
    ])
  ]
})

export class HeroFormComponent{

  constructor(
    private formStateService:FormStateService,
    private formDataService: FormDataService
  ){}

  powers = this.formDataService.powers;

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  //duplicate = false;

  changeState(state:number):void {
    this.formStateService.changeState(state);
  }

  getState():string{
     return this.formStateService.state;
  }


/*


  deleteTreatment(index:number):void{
    this.treatments.splice(index, 1);
  }

  duplicateCheck(treatment:any){
    if( this.validCheck()){
      console.log(treatment);
      treatment.duplicate = true;
    }else{
      treatment.duplicate = false;
    }
   // console.log(treatment);
  }

  validCheck():boolean{

    let set = new Set();

    this.treatments.forEach((element:any)=>{
      set.add(element.location);
    });

    //return true if duplicate
    return set.size !== this.treatments.length;

  }
*/

}
