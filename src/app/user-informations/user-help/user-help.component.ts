import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { UiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-user-help',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './user-help.component.html',
  styleUrl: './user-help.component.scss',
})
export class UserHelpComponent {
  uiService = inject(UiService);
  
  constructor() {}

}
