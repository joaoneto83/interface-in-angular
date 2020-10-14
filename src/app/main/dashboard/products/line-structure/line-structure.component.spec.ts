import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineStructureComponent } from './line-structure.component';

describe('LineStructureComponent', () => {
  let component: LineStructureComponent;
  let fixture: ComponentFixture<LineStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
