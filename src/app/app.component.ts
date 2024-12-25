import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-join';
  onLogin: boolean = false;

  constructor(private router: Router) {
    this.subRouterEvents();
  }

  subRouterEvents() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.checkPath(event.url);
      }
    });
  }

  checkPath(url: string) {
    this.onLogin = url === '/login' || url === '/' || url === '/signup';
  }
}
