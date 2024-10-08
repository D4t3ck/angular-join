import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-user-help',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './user-help.component.html',
  styleUrl: './user-help.component.scss',
})
export class UserHelpComponent {
  constructor(private _location: Location) {}

  navigateBack() {
    this._location.back();
  }
}
