import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeProductComponent } from './include-product.component';

describe('IncludeProductComponent', () => {
  let component: IncludeProductComponent;
  let fixture: ComponentFixture<IncludeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
