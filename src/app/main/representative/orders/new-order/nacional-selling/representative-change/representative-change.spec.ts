import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeChangeComponent } from './representative-change.component';

describe('RepresentativeChangeComponent', () => {
  let component: RepresentativeChangeComponent;
  let fixture: ComponentFixture<RepresentativeChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentativeChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
