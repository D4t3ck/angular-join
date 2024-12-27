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
import { BehaviorSubject, Observable } from 'rxjs';

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

  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
      this.uiService.navigate('/', false);
    } catch (error) {
      // console.error('Sign out failed:', error.message);
      throw new Error('Sign out failed. Please try again.');
    }
  }

  /**
   * Handle Firebase errors and throw user-friendly messages.
   * @param error - The FirebaseError instance
   */
  private handleFirebaseError(error: FirebaseError): void {
    // Example: Add logging service
    this.logError(error);

    switch (error.code) {
      case 'auth/email-already-in-use':
        throw new Error(
          'This email address is already in use. Please try another email address.'
        );

      case 'auth/wrong-password':
        throw new Error('Incorrect password. Please check your input.');

      case 'auth/user-not-found':
        throw new Error('No user found with this email address.');

      case 'auth/invalid-email':
        throw new Error('The email address entered is invalid.');

      default:
        console.error('An unknown error occurred:', error.message);
        throw new Error(
          'An unexpected error occurred. Please try again later.'
        );
    }
  }

  /**
   * Log Firebase errors for debugging or monitoring
   */
  private logError(error: FirebaseError): void {
    // Log-Service oder externe Monitoring-Tools wie Sentry, Firebase Crashlytics verwenden
    console.error(
      `[FirebaseError]: Code: ${error.code}, Message: ${error.message}`
    );
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
  isGuestMode(): Observable<boolean> {
    return this.guestMode$.asObservable();
  }
}
