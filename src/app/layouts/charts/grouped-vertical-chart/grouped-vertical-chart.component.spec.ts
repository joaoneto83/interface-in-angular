import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedVerticalChartComponent } from './grouped-vertical-chart.component';

describe('GroupedVerticalChartComponent', () => {
  let component: GroupedVerticalChartComponent;
  let fixture: ComponentFixture<GroupedVerticalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedVerticalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedVerticalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
