import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsManagerialComponent } from './goals-managerial.component';

describe('GoalsManagerialComponent', () => {
  let component: GoalsManagerialComponent;
  let fixture: ComponentFixture<GoalsManagerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsManagerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsManagerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
