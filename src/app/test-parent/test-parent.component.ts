import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { HeroService } from '../services/heroes/hero.service';
import { TestComponentComponent } from '../test-component/test-component.component';
import {ViewRulesetsComponent} from '../components/view-rulesets/view-rulesets.component';
import { ChildTwoComponent } from '../components/child-two/child-two.component';
import { Observable, Subject } from 'rxjs';
import { NumberService } from '../services/number/number.service';
import { TableDataService } from '../services/table-data/table-data.service';

@Component({
  selector: 'test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.less']
})

/**
 * This is a parent or wrapper component for the test component
 * @example
 *      <test-parent
 *        [hero]="hero"
 *        [master]="master">
 *      </test-parent>
 */
export class TestParentComponent implements OnInit {

  @Input() myProp: string | undefined;
  @ViewChild(TestComponentComponent)
  private childComponent!: TestComponentComponent;
  private _masterText = "";
  public data: Subject<number>;
  public tableData: Subject<any>

  get masterText(): string {return this._masterText;}
  set masterText(name: string) {
    this._masterText = this.myProp || "";
  }
  parentName = "hi";
  test = [""];
  size = "2px";

  constructor(heroService: HeroService,
              numberService: NumberService,
              tableDataService: TableDataService) {
    this.test = heroService.getHeroes();
    this.data = numberService.getNumber();
    this.tableData = tableDataService.getData();
  }

  ngOnInit(): void {

  }

  start() {
    console.warn(this.test)
    // this.childComponent.start();
  }

  changeNumber() {
    this.data.next(Math.random())
  }

  changeTableData() {
    this.tableData.next({
      a: Math.random(),
      b: Math.random(),
      f: Math.random(),
    })
  }
}
