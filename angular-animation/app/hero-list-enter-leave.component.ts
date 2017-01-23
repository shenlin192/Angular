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
  selector: 'hero-list-enter-leave',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
          [@flyInOut]="'in'">
        {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['hero-list.component.css'],
  /* The element here always has the state "in" when it
   * is present. We animate two transitions: From void
   * to in and from in to void, to achieve an animated
   * enter and leave transition. The element enters from
   * the left and leaves to the right using translateX.
   */
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class HeroListEnterLeaveComponent {
  @Input() heroes: Heroes;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
