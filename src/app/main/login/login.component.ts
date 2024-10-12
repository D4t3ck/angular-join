import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router = inject(Router);
  authService = inject(AuthService);
  
  constructor() {}

  linkToImprint() {
    this.authService.setLoggedIn(false);  // Setzt den Status auf nicht eingeloggt
    this.router.navigate(['imprint-blank']);
  }

  linkToPrivacyPolicy() {
    this.authService.setLoggedIn(false);
    this.router.navigate(['privacy-policy-blank']);
  }

  linkToSignUp() {
    this.router.navigate(['signup']);
  }

  logInUser() {
    this.authService.setLoggedIn(true); // Beispiel: Nutzer ist eingeloggt
    this.router.navigate(['summary']);
  }
}
