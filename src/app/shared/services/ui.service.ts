import { inject, Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private router = inject(Router);
  private location = inject(Location);

  userLoggedIn: boolean = false;
  showHeaderMenu: boolean = false;

  constructor() {}

  navigate(route: string, loggedInStatus?: boolean, extras?: NavigationExtras) {
    if (loggedInStatus !== undefined) {
      this.userLoggedIn = loggedInStatus;
    }
    this.router.navigate([route], extras);
  }

  goToRouteAndClose(route: string, status?: boolean) {
    this.navigate(route, status);
    this.showHeaderMenu = false;
  }

  toggleHeaderMenu() {
    this.showHeaderMenu = !this.showHeaderMenu;
  }

  goHome() {
    if (this.userLoggedIn) {
      this.navigate('summary');
      this.showHeaderMenu = false;
    } else {
      this.navigate('');
      this.showHeaderMenu = false;
    }
  }

  goBack() {
    if (!this.userLoggedIn) {
      this.router.navigate(['']);
    } else {
      this.location.back();
    }
  }
}
