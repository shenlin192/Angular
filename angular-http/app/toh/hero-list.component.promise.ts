// Observable Version
import { Component, OnInit } from '@angular/core';
import { Hero }              from './hero';
import { HeroServicePromise }       from './hero.service.promise';



@Component({
  moduleId: module.id,
  selector: 'hero-list-promise',
  templateUrl: 'hero-list.component.html',
  providers: [ HeroServicePromise ],
  styles: ['.error {color:red;}']
})

export class HeroListComponentPromise implements OnInit{
  errorMessage: string;
  heroes: Hero[];
  mode = 'Promise';

  constructor (private heroService: HeroServicePromise) {}

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.heroService.getHeroes()
      .then( heroes => this.heroes = heroes)
      .catch(  error =>  this.errorMessage = <any>error);
    //promise.then().catch()
  }

  addHero (name: string) {
    if (!name) { return; }
    this.heroService.addHero(name)
      .then( hero => this.heroes.push(hero))
      .catch(  error =>  this.errorMessage = <any>error);
  }

}
