import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  linkToImprint() {
    this.router.navigate(['imprint-blank']);
  }

  linkToPrivacyPolicy() {
    this.router.navigate(['privacy-policy-blank']);
  }

  linkToSignUp() {
    this.router.navigate(['signup']);
  }
}
