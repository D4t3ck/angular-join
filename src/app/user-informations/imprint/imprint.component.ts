import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(private _location: Location) {}

  navigateBack() {
    this._location.back();
  }
}
