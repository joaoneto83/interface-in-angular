import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSellerModalComponent } from './signup-seller-modal.component';

describe('SignupSellerModalComponent', () => {
  let component: SignupSellerModalComponent;
  let fixture: ComponentFixture<SignupSellerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSellerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSellerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
