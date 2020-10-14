import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeCustomerComponent } from './include-customer.component';

describe('IncludeCustomerComponent', () => {
  let component: IncludeCustomerComponent;
  let fixture: ComponentFixture<IncludeCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludeCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
