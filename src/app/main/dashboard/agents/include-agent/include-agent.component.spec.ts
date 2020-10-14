import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeAgentComponent } from './include-agent.component';

describe('IncludeAgentComponent', () => {
  let component: IncludeAgentComponent;
  let fixture: ComponentFixture<IncludeAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludeAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludeAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
