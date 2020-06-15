import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group23page3Component } from './group23page3.component';

describe('Group23page3Component', () => {
  let component: Group23page3Component;
  let fixture: ComponentFixture<Group23page3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group23page3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group23page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
