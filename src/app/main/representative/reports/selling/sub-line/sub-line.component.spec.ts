import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLineComponent } from './sub-line.component';

describe('SubLineComponent', () => {
  let component: SubLineComponent;
  let fixture: ComponentFixture<SubLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
