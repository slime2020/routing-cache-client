import { Component, OnInit, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingCache } from 'src/app/app-routing-cache';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Login:MainComponent> ngOnInit()');
  }

  login(): void {
    this.router.navigateByUrl('/');
  }

}
