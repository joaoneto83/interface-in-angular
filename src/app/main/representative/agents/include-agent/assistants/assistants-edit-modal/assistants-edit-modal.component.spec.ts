import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantsEditModalComponent } from './assistants-edit-modal.component';

describe('AssistantsEditModalComponent', () => {
  let component: AssistantsEditModalComponent;
  let fixture: ComponentFixture<AssistantsEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistantsEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantsEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
