import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCustomerDetailComponent } from './regular-customer-detail.component';

describe('RegularCustomerDetailComponent', () => {
  let component: RegularCustomerDetailComponent;
  let fixture: ComponentFixture<RegularCustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularCustomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
