import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group23page2Component } from './group23page2.component';

describe('Group23page2Component', () => {
  let component: Group23page2Component;
  let fixture: ComponentFixture<Group23page2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group23page2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group23page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
