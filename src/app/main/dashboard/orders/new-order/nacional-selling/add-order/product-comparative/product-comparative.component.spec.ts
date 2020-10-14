import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComparativeComponent } from './product-comparative.component';

describe('ProductComparativeComponent', () => {
  let component: ProductComparativeComponent;
  let fixture: ComponentFixture<ProductComparativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComparativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComparativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
