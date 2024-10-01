import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  constructor(private router: Router) {}

  linkToImprint() {
    this.router.navigate(['imprint-blank']);
  }
  linkToPrivacyPolicy() {
    this.router.navigate(['privacy-policy-blank']);
  }
}
