import { inject, Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UiService } from './ui.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private uiService = inject(UiService);

  user$ = user(this.auth);
  private guestMode$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  /**
   * Create a new user account with email and password.
   * @param email - The user's email address
   * @param password - The user's password
   */
  async createUser(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.uiService.navigate('/');
    } catch (error) {
      this.handleFirebaseError(error as FirebaseError);
    }
  }

  /**
   * Log in an existing user with email and password.
   * @param email - The user's email address
   * @param password - The user's password
   */
  async logIn(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      const redirect =
        this.router.routerState.snapshot.root.queryParams['redirect'] || '/';
      this.uiService.navigate(redirect, true);
    } catch (error) {
      this.handleFirebaseError(error as FirebaseError);
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
      this.uiService.navigate('/', false);
    } catch (error) {
      this.handleFirebaseError(error as FirebaseError);
    }
  }

  /**
   * Handle Firebase errors and throw user-friendly messages.
   * @param error - The FirebaseError instance
   */
  private handleFirebaseError(error: FirebaseError): void {
    switch (error.code) {
      case 'auth/email-already-in-use':
        throw new Error(
          'Diese E-Mail-Adresse wird bereits verwendet. Bitte versuche es mit einer anderen E-Mail-Adresse.'
        );

      case 'auth/wrong-password':
        throw new Error('Falsches Passwort. Bitte überprüfe deine Eingabe.');

      case 'auth/user-not-found':
        throw new Error('Kein Benutzer mit dieser E-Mail-Adresse gefunden.');

      case 'auth/invalid-email':
        throw new Error('Die eingegebene E-Mail-Adresse ist ungültig.');

      default:
        console.error('Ein unbekannter Fehler ist aufgetreten:', error.message);
        throw new Error(
          'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später erneut.'
        );
    }
  }

  /**
   * Toggle guest mode state.
   * @param isGuestMode - Set guest mode on or off
   */
  toggleGuestMode(isGuestMode: boolean): void {
    this.guestMode$.next(isGuestMode);
  }

  /**
   * Get the current guest mode state.
   * @returns Observable<boolean> - The guest mode state
   */
  isGuestMode() {
    return this.guestMode$.asObservable();
  }
}
