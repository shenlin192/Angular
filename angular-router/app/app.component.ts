import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <h1>{{name}}</h1>
     <a routerLink="/component1" routerLinkActive="active">component1</a><br>
     <a routerLink="/component2" routerLinkActive="active">component2</a><br>
   <router-outlet></router-outlet>
  `
})

export class AppComponent  {
  name = 'Angular';
}
