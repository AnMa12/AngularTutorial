import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    /*The ActivatedRoute holds information about the route to this instance of
     * the HeroDetailComponent. This component is interested in the route's bag
     * of parameters extracted from the URL. The "id" parameter is the id of the hero to display.*/
    private route: ActivatedRoute,
    /*The HeroService gets hero data from the remote server and this
     * component will use it to get the hero-to-display.*/
    private heroService: HeroService,
    /*The location is an Angular service for interacting with the browser.
     * You'll use it later to navigate back to the view that navigated here.*/
    private location: Location
  ) { }

  ngOnInit() {
    /*Extract the id route parameter*/
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  /*Find the way back*/
  goBack(): void {
    this.location.back();
  }

}
