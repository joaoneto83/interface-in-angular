import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpcCustomerDetailComponent } from './vpc-customer-detail.component';

describe('VpcCustomerDetailComponent', () => {
  let component: VpcCustomerDetailComponent;
  let fixture: ComponentFixture<VpcCustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpcCustomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpcCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
