import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveCommissionModalComponent } from './effective-commission-modal.component';

describe('EffectiveCommissionModalComponent', () => {
  let component: EffectiveCommissionModalComponent;
  let fixture: ComponentFixture<EffectiveCommissionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectiveCommissionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectiveCommissionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
