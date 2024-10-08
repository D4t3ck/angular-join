import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-privacy-policy-blank',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy-blank.component.html',
  styleUrl: './privacy-policy-blank.component.scss',
})
export class PrivacyPolicyBlankComponent {
  constructor(private _location: Location) {}

  navigateBack() {
    this._location.back();
  }
}
