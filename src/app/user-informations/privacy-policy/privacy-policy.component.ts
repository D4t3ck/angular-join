import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(private _location: Location) {}

  navigateBack() {
    this._location.back();
  }
}
