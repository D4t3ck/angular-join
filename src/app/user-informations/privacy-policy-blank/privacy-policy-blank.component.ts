import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderBlankComponent } from "../../shared/components/header-blank/header-blank.component";
import { NavbarBlankComponent } from "../../shared/components/navbar-blank/navbar-blank.component";

@Component({
  selector: 'app-privacy-policy-blank',
  standalone: true,
  imports: [HeaderBlankComponent, NavbarBlankComponent],
  templateUrl: './privacy-policy-blank.component.html',
  styleUrl: './privacy-policy-blank.component.scss',
})
export class PrivacyPolicyBlankComponent {
  constructor(private _location: Location) {}

  navigateBack() {
    this._location.back();
  }
}
