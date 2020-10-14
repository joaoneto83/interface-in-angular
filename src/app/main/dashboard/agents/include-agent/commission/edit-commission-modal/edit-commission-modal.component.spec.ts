import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommissionModalComponent } from './edit-commission-modal.component';

describe('EditCommissionModalComponent', () => {
  let component: EditCommissionModalComponent;
  let fixture: ComponentFixture<EditCommissionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditCommissionModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
