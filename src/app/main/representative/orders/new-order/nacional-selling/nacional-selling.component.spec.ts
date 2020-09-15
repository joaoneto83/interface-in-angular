import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalSellingComponent } from './nacional-selling.component';

describe('NacionalSellingComponent', () => {
  let component: NacionalSellingComponent;
  let fixture: ComponentFixture<NacionalSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacionalSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
