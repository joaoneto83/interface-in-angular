import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionAgentsComponent } from './commission-agents.component';

describe('CommissionAgentsComponent', () => {
  let component: CommissionAgentsComponent;
  let fixture: ComponentFixture<CommissionAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
