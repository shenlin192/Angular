import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1 }   from './component1.component';
import { Component2 }      from './component2.component';
import { Component3 }  from './component3.component';

const routes: Routes = [
  { path: '', redirectTo: '/component1', pathMatch: 'full' },
  { path: 'component1',  component: Component1 },
  { path: 'component3/:id', component: Component3 },
  { path: 'component2',     component: Component2 }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
