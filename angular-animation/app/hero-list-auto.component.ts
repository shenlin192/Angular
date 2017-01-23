import {
  Component,
  Input,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

import { Heroes } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-list-auto',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
          [@shrinkOut]="'in'">
        {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['hero-list.component.css'],

  /* When the element leaves (transition "in => void" occurs),
   * get the element's current computed height and animate
   * it down to 0.
   */
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('in => void', [
        style({height: '*'}),
        animate(2500, style({height: 0}))
      ])
    ])
  ]
})
export class HeroListAutoComponent {
  @Input() heroes: Heroes;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
