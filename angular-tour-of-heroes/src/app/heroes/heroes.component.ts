import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  //hero property for a hero named "Windstorm"
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  //heroes property to the class that exposes these heroes for binding
  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
