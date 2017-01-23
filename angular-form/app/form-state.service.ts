import { Injectable } from '@angular/core'

@Injectable()
export class FormStateService{
  state = '2';

  changeState(state: number){
    this.state = state.toString();
  }
}
