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
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private uiService = inject(UiService);
  private errorService = inject(ErrorService);
  private guestMode = false;

  user$ = user(this.auth);
  private guestMode$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  setGuestMode(isGuest: boolean) {
    this.guestMode = isGuest;
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }

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
      this.errorService.handleFirebaseError(error as FirebaseError);
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
      this.errorService.handleFirebaseError(error as FirebaseError);
    }
  }

  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
      this.uiService.navigate('/', false);
    } catch (error) {
      throw new Error('Sign out failed. Please try again.');
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
  isGuestMode(): Observable<boolean> {
    return this.guestMode$.asObservable();
  }
}
