import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLoggedIn: boolean = false;

  constructor() { }

   // Getter für den Login-Status
   isLoggedIn(): boolean {
    return this.userLoggedIn;
  }

  // Setter für den Login-Status
  setLoggedIn(status: boolean) {
    this.userLoggedIn = status;
  }
}
