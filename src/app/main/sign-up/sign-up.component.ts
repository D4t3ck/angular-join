import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-sign-up',
  imports: [RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  router = inject(Router);
  authService = inject(AuthService);
  uiService = inject(UiService);

  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  constructor() {}

  togglePasswordVisibility() {
    this.passwordVisible = this.uiService.togglePasswordVisibility(
      'password',
      this.passwordVisible
    );
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = this.uiService.togglePasswordVisibility(
      'passwordConfirm',
      this.confirmPasswordVisible
    );
  }
}
