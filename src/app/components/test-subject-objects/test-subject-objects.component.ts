import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TableDataService } from 'src/app/services/table-data/table-data.service';

@Component({
  selector: 'app-test-subject-objects',
  templateUrl: './test-subject-objects.component.html',
  styleUrls: ['./test-subject-objects.component.less']
})
export class TestSubjectObjectsComponent implements OnInit {

  public data: Subject<any>;
  public tableData: any;

  constructor(tableDataService: TableDataService) {
    this.data = tableDataService.getData();
    this.tableData = {};
    this.data.subscribe((x) => this.tableData = x);
  }

  ngOnInit(): void {
  }

  stringify(data: any) {
    return JSON.stringify(data);
  }

}
