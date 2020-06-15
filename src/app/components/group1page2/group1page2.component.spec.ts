import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group1page2Component } from './group1page2.component';

describe('Group1page2Component', () => {
  let component: Group1page2Component;
  let fixture: ComponentFixture<Group1page2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1page2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group1page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
