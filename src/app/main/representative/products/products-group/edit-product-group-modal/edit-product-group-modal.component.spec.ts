import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductGroupModalComponent } from './edit-product-group-modal.component';

describe('EditProductGroupModalComponent', () => {
  let component: EditProductGroupModalComponent;
  let fixture: ComponentFixture<EditProductGroupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductGroupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
