import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private router = inject(Router);
  private location = inject(Location);
  
  private userLoggedIn: boolean = true;

  constructor() { }

  goHome(){
    if (this.userLoggedIn) {
      this.router.navigate(['summary']);
    }
  }

  goBack(){
    if (!this.userLoggedIn) {
      this.router.navigate(['']);
    } else {
      this.location.back();
    }
  }
}
