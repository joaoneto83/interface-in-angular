import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpcCustomerComponent } from './vpc-customer.component';

describe('VpcCustomerComponent', () => {
  let component: VpcCustomerComponent;
  let fixture: ComponentFixture<VpcCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpcCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpcCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
