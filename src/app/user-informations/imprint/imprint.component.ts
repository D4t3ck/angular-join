import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { UiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  uiService = inject(UiService);

  constructor() {}
}
