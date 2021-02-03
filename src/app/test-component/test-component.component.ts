import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.less']
})
export class TestComponentComponent implements OnInit {
  // Props
  // @Input() hero: string;
  // @Input('master') masterName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
