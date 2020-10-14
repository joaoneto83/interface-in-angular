import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionManagerialComponent } from './commission-managerial.component';

describe('CommissionManagerialComponent', () => {
  let component: CommissionManagerialComponent;
  let fixture: ComponentFixture<CommissionManagerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionManagerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionManagerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
