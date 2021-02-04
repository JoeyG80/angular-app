import { 
  Component, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges 
} from '@angular/core';
import { HeroService } from '../services/heroes/hero.service';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.less']
})

/**
 * This is a test component for practicing Angular
 * @example
 *      <test-component
 *        hero="hero"
 *        master="master">
 *      </test-component>
 */
export class TestComponentComponent implements OnInit, OnChanges {
  // Props
  @Input() hero: string | undefined;
  @Input('master') masterName: string | undefined;

  get name(): string { return this._name; }
  set name(name: string) {
    this._name = this.hero || "";
  }
  private _name = '';
  test = [""];

  constructor(heroService: HeroService) { 
    this.test = heroService.getHeroes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const message = Object.keys(changes).find((key) => {
      return key === "hero" ? changes[key] : "";
    })
    console.log(message);
  }

  ngOnInit(): void {
  }

  start() { 
    this.test.push("hello");
    console.log("start" + this.test);

  }

}
