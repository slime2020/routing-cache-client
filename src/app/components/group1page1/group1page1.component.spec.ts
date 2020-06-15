import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group1page1Component } from './group1page1.component';

describe('Group1page1Component', () => {
  let component: Group1page1Component;
  let fixture: ComponentFixture<Group1page1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1page1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group1page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
