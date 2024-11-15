import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  router = inject(Router);
  authService = inject(AuthService);
  uiService = inject(UiService);

  constructor() {}

  linkToImprint() {
    this.uiService.navigate('imprint', false);
  }

  linkToPrivacyPolicy() {
    this.uiService.navigate('privacy-policy', false);
  }
}
