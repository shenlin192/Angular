import { Injectable } from '@angular/core'

@Injectable()
export class FormDataService{

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  types = ['Contacts','Products'];

  currentType = this.types[0];

  treatmentHeaders = [['firstName','lastName','address'],['price', 'size']];

  treatmentTypes = ['float','int','double'];

  currentTreatments:any = [{
    header:'firstName',
    type:'float',
    location:'0'
  }];

  changeType(type :string){
    if( this.currentType !== type){
       this.currentType = type;
       this.currentTreatments = [];
    }

  }

  getCurrentTreatmentHeader(){
    if(this.currentType === this.types[0]){
      return this.treatmentHeaders[0];
    }else{
      return this.treatmentHeaders[1];
    }
  }

  newTreatment(){
    this.currentTreatments.push({
      header:this.getCurrentTreatmentHeader()[0],
      type: this.treatmentTypes[0],
      location: this.currentTreatments.length
    });
  }

  deleteTreatment(index: number){
    //console.log(index);
    this.currentTreatments.splice(index,1);
    console.log('afterDelete:',this.currentTreatments)
  }

  updateType(index:number , value:string){
    this.currentTreatments[index]['type']=value;
    console.log('afterUpdateType:',this.currentTreatments)
  }

  updateHeader(index:number , value:string){
    console.log(value);
    this.currentTreatments[index]['header']=value;
    console.log('afterUpdateHeader:',this.currentTreatments)
  }

}
