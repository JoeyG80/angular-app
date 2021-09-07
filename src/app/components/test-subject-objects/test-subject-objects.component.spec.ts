import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSubjectObjectsComponent } from './test-subject-objects.component';

describe('TestSubjectObjectsComponent', () => {
  let component: TestSubjectObjectsComponent;
  let fixture: ComponentFixture<TestSubjectObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSubjectObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSubjectObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
