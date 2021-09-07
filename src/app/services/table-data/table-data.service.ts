import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  public data: Subject<any>;

  constructor() {
    this.data = new Subject<any>();
    this.data.next({
      a: 'a',
      b: {
        b: 'b'
      },
      c: 0
    });
  }

  public getData(): Subject<any> {
    return this.data;
  }
}
