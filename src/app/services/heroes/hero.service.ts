import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  test = [""];
  constructor() {
    this.test = ["Spiderman", "Ironman", "Hulk", "Thor"];
   }
  getHeroes() { return this.test; }
}
