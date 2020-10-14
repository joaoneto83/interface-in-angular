import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsAgentsComponent } from './goals-agents.component';

describe('GoalsAgentsComponent', () => {
  let component: GoalsAgentsComponent;
  let fixture: ComponentFixture<GoalsAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
