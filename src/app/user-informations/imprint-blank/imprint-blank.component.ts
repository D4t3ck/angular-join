import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderBlankComponent } from "../../shared/components/header-blank/header-blank.component";
import { NavbarBlankComponent } from "../../shared/components/navbar-blank/navbar-blank.component";
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-imprint-blank',
  standalone: true,
  imports: [HeaderBlankComponent, NavbarBlankComponent],
  templateUrl: './imprint-blank.component.html',
  styleUrl: './imprint-blank.component.scss',
})
export class ImprintBlankComponent {
  authService = inject(AuthService);
  
  constructor(private _location: Location) {}

  navigateBack() {
    this.authService.setLoggedIn(false);
    this._location.back();
  }
}
