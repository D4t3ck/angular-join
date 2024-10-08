import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imprint-blank',
  standalone: true,
  imports: [],
  templateUrl: './imprint-blank.component.html',
  styleUrl: './imprint-blank.component.scss',
})
export class ImprintBlankComponent {
  constructor(private _location: Location) {}

  navigateBack() {
    this._location.back();
  }
}
