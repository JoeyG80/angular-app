import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NumberService } from 'src/app/services/number/number.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.less']
})

/**
 * This component demonstrates an implementation of an observer
 */
export class ChildTwoComponent implements OnInit {
  public data: Subject<number>;
  public number: number;

  constructor(numberService: NumberService) {
    this.data = numberService.getNumber();
    this.number = 0;
    this.data.subscribe((x) => this.number = x);
  }

  ngOnInit(): void {
  }

}
