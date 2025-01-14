import { AuthService } from '../../shared/services/auth.service';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FirebaseError } from 'firebase/app';
import { Router, RouterModule } from '@angular/router';
import { UiService } from '../../shared/services/ui.service';
import { ErrorService } from '../../shared/services/error.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent {
  router = inject(Router);
  authService = inject(AuthService);
  uiService = inject(UiService);
  private errorService = inject(ErrorService);

  passwordVisible: boolean = false;
  errorMessage: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });

  constructor() {}

  ngOnInit() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const rememberMe = localStorage.getItem('rememberMe') === 'true';

    if (rememberMe) {
      this.loginForm.patchValue({
        email: savedEmail,
        password: savedPassword,
        rememberMe: true,
      });
    }
  }

  ngOnDestroy() {
    this.onRememberMeChange();
  }

  onRememberMeChange() {
    const { email, password, rememberMe } = this.loginForm.value;

    if (rememberMe) {
      localStorage.setItem('email', email || '');
      localStorage.setItem('password', password || '');
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.setItem('rememberMe', 'false');
    }
  }

  async onSubmit() {
    if (!this.loginForm.valid) {
      this.errorMessage = 'Bitte alle Felder korrekt ausfüllen.';
      return;
    }

    const { email, password, rememberMe } = this.loginForm.value;
    if (email && password) {
      try {
        await this.authService.logIn(email, password);
        console.log('Erfolgreich angemeldet');
        this.router.navigate(['/dashboard']);
        this.errorMessage = '';

        if (rememberMe) {
          this.onRememberMeChange();
        }
      } catch (error) {
        this.errorService.handleFirebaseError(error as FirebaseError);
      }
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById(
      'password'
    ) as HTMLInputElement;
    if (passwordField) {
      passwordField.type = this.passwordVisible ? 'text' : 'password';
    }
  }

  guestLogin() {
    this.authService.setGuestMode(true);
    this.uiService.navigate('/summary', true);
  }

  async logout() {
    const currentUser = this.authService.getCurrentUser();

    if (currentUser) {
      const userEmail = currentUser.email;
      await this.authService.signOut();
      console.log(`Benutzer ${userEmail} erfolgreich abgemeldet.`);
    } else {
      console.log('Kein Benutzer ist aktuell angemeldet.');
    }
  }

  logInUser() {
    this.uiService.navigate('summary', true);
  }
}
