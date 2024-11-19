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

  constructor() {}

  navigate(route: string, loggedInStatus?: boolean, extras?: NavigationExtras) {
    if (loggedInStatus !== undefined) {
      this.userLoggedIn = loggedInStatus;
    }
    this.router.navigate([route], extras);
  }

  toggleNavbarMenu() {
    this.navbarVisible = !this.navbarVisible;
  }

  goHome() {
    if (this.userLoggedIn) {
      this.navigate('summary');
    } else {
      this.navigate('');
    }
  }

  goBack() {
    if (!this.userLoggedIn) {
      this.router.navigate(['']);
    } else {
      this.location.back();
    }
  }

  // TODO: evtl. routen wenn logged in oder wenn nicht ändern.
  // zB auf summary wenn true, oder nur back wenn andere fälle
}
