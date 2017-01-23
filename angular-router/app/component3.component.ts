import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  selector:'myComponent3',
  template:`<div>{{name}}</div>
    <div *ngIf="id">{{id}}</div>`
})

export class Component3 implements OnInit{
  name = 'Component3';
  sub:any;
  id:any;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }
}
