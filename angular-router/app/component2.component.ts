import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'myComponent2',
  template:`
  <div>{{name}}</div>

   <div *ngFor="let n of counts" (click)="goTo(n)">
      {{n}}
  </div>
`
})

export class Component2{

  name = 'Component2';
  counts = [1,2,3];

  constructor(private router:Router){}

  goTo(n:number): void {
     console.log(n);
    this.router.navigate(['/component3', n.toString()]);
  }
}
