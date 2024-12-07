import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  router = inject(Router);
  authService = inject(AuthService);
  uiService = inject(UiService);

  
}
