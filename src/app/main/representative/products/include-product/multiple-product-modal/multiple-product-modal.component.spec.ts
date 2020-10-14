import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleProductModalComponent } from './multiple-product-modal.component';

describe('MultipleProductModalComponent', () => {
  let component: MultipleProductModalComponent;
  let fixture: ComponentFixture<MultipleProductModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleProductModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
