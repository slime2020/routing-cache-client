import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group1page3Component } from './group1page3.component';

describe('Group1page3Component', () => {
  let component: Group1page3Component;
  let fixture: ComponentFixture<Group1page3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1page3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group1page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
