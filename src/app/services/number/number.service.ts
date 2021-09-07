import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * This class demonstrates the use of an observable.
 */
export class NumberService {
  public data: Subject<number>;

  constructor() {
    this.data = new Subject<number>();
    this.data.next(0);
  }

  public getNumber(): Subject<number> {
    return this.data;
  }
}
