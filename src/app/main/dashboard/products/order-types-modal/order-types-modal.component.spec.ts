import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTypesModalComponent } from './order-types-modal.component';

describe('OrderTypesModalComponent', () => {
  let component: OrderTypesModalComponent;
  let fixture: ComponentFixture<OrderTypesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTypesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTypesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
