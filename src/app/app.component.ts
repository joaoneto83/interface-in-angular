import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elgin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
