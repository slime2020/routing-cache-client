import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group1page2',
  templateUrl: './group1page2.component.html',
  styleUrls: ['./group1page2.component.scss']
})
export class Group1page2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Group1page2Component> ngOnInit()');
  }

}
