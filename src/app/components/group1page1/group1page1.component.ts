import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group1page1',
  templateUrl: './group1page1.component.html',
  styleUrls: ['./group1page1.component.scss']
})
export class Group1page1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Group1page1Component> ngOnInit()');
  }

}
