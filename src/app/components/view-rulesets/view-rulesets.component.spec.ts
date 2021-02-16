import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRulesetsComponent } from './view-rulesets.component';

describe('ViewRulesetsComponent', () => {
  let component: ViewRulesetsComponent;
  let fixture: ComponentFixture<ViewRulesetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRulesetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRulesetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
