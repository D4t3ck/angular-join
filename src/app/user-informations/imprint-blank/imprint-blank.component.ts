import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderBlankComponent } from "../../shared/components/header-blank/header-blank.component";
import { NavbarBlankComponent } from "../../shared/components/navbar-blank/navbar-blank.component";

@Component({
  selector: 'app-imprint-blank',
  standalone: true,
  imports: [HeaderBlankComponent, NavbarBlankComponent],
  templateUrl: './imprint-blank.component.html',
  styleUrl: './imprint-blank.component.scss',
})
export class ImprintBlankComponent {
  constructor(private _location: Location) {}

  navigateBack() {
    this._location.back();
  }
}
