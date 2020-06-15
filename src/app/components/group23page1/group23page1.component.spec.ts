import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group23page1Component } from './group23page1.component';

describe('Group23page1Component', () => {
  let component: Group23page1Component;
  let fixture: ComponentFixture<Group23page1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group23page1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group23page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
