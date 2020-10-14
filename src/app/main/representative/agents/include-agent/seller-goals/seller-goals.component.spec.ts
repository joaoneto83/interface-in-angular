import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerGoalsComponent } from './seller-goals.component';

describe('SellerGoalsComponent', () => {
  let component: SellerGoalsComponent;
  let fixture: ComponentFixture<SellerGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
