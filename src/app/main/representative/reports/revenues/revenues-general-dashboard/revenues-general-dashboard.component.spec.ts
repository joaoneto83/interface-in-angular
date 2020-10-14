import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuesGeneralDashboardComponent } from './revenues-general-dashboard.component';

describe('RevenuesGeneralDashboardComponent', () => {
  let component: RevenuesGeneralDashboardComponent;
  let fixture: ComponentFixture<RevenuesGeneralDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenuesGeneralDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuesGeneralDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
