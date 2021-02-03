import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { TestComponentComponent } from "../test-component/test-component.component";

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

  get masterText(): string {return this._masterText;}
  set masterText(name: string) {
    this._masterText = this.myProp || "";
  }
  private _masterText = "";
  parentName = "hi";

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.childComponent.start();
  }

}
