import {
  Component,
  Input,
  EventEmitter,
  Output,
} from '@angular/core'

import { FormDataService } from './form-data.service';

@Component({
  moduleId: module.id,
  selector:'treatment-component',
  templateUrl:'treatment.component.html',
})

export class TreatmentComponent{
  @Input() treatment:any;
  @Input() index:number;
  @Input() headers:string[];
  @Input() treatmentTypes:string[];

  //Emitter event to parent
  @Output() deleteTreatment = new EventEmitter<number>();

  constructor(
    private formDataService: FormDataService
  ){}

  deleteEvent(){
    this.deleteTreatment.emit(this.index);
  }

  onChangeType(value:string){
    //console.log(value);
    value.toString();
    this.formDataService.updateType(this.index,value);
  }

  onChangeHeader(value:string){
    //console.log(value);
    value.toString();
    this.formDataService.updateHeader(this.index,value);
  }

}
