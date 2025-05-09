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
  navbarVisible: boolean = false;
  showSignUp: boolean = false;

  constructor() {}

  navigate(route: string, loggedInStatus?: boolean, extras?: NavigationExtras) {
    if (loggedInStatus !== undefined) {
      this.userLoggedIn = loggedInStatus;
    }
    this.router.navigate([route], extras);
  }

  goToRouteAndClose(route: string, status?: boolean) {
    this.navigate(route, status);
    this.navbarVisible = false;
  }

  toggleHeaderMenu() {
    this.navbarVisible = !this.navbarVisible;
  }

  toggleSignUp() {
    this.showSignUp = !this.showSignUp;
  }

  closeSignUp() {
    this.showSignUp = false;
  }

  closeHeaderMenu() {
    setTimeout(() => {
      this.navbarVisible = false;
    }, 100);
  }

  goHome() {
    if (this.userLoggedIn) {
      this.navigate('summary');
      this.navbarVisible = false;
    } else {
      this.navigate('');
      this.navbarVisible = false;
    }
  }

  goBack() {
    if (!this.userLoggedIn) {
      this.router.navigate(['']);
    } else {
      this.location.back();
    }
  }

  togglePasswordVisibility(fieldId: string) {
    const passwordField = document.getElementById(fieldId) as HTMLInputElement;

    if (passwordField) {
      const isVisible = passwordField.type === 'text';
      passwordField.type = isVisible ? 'password' : 'text';
    }
  }
}
