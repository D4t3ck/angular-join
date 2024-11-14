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
    this.authService.setLoggedIn(false); 
    this.router.navigate(['imprint']);
  }

  linkToPrivacyPolicy() {
    this.authService.setLoggedIn(false);
    this.router.navigate(['privacy-policy']);
  }

  linkToSignUp() {
    this.router.navigate(['signup']);
  }

  logInUser() {
    this.authService.setLoggedIn(true);
    this.router.navigate(['summary']);
  }
}
