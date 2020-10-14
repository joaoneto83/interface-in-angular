import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpcCustomerDetailsModalComponent } from './vpc-customer-details-modal.component';

describe('VpcCustomerDetailsModalComponent', () => {
  let component: VpcCustomerDetailsModalComponent;
  let fixture: ComponentFixture<VpcCustomerDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VpcCustomerDetailsModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpcCustomerDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
