import { Component, OnInit, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingCache } from 'src/app/app-routing-cache';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('AdminComponent> ngOnInit()');
  }

  goto(path: string): void {
    console.log('AdminComponent> goto:', path);
    this.router.navigateByUrl(path);
  }

  clearRoutingCache(): void {
    Object.keys(AppRoutingCache.handlers)
      .forEach(key => {
        const component = AppRoutingCache.handlers[key] as {
          componentRef: ComponentRef<any>;
        };
        if (component) {
          component.componentRef.destroy();
          delete AppRoutingCache.handlers[key];
        }
      });
  }

  logout(): void {
    console.log('AdminComponent> logout()');
    // his.router.navigateByUrl('/login');
    this.router.navigate(['/login']);
    this.clearRoutingCache();
  }

}
