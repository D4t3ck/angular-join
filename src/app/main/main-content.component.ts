import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UiService } from '../shared/services/ui.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterModule, LoginComponent, SignUpComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  router = inject(Router);
  authService = inject(AuthService);
  uiService = inject(UiService);
}
