import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  constructor(private router: Router, private _location: Location) {}

  backToLogin() {
    this._location.back();
  }

  linkToImprint() {
    this.router.navigate(['imprint-blank']);
  }
  linkToPrivacyPolicy() {
    this.router.navigate(['privacy-policy-blank']);
  }
}
