import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLineModalComponent } from './product-line-modal.component';

describe('ProductLineModalComponent', () => {
  let component: ProductLineModalComponent;
  let fixture: ComponentFixture<ProductLineModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLineModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
