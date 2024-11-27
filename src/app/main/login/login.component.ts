import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UiService } from '../../shared/services/ui.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router = inject(Router);
  authService = inject(AuthService);
  uiService = inject(UiService);

  constructor() {}

  logInUser() {
    this.uiService.navigate('summary', true);
  } // TODO: Funktion implementieren und mit auth verknüpfen
}
