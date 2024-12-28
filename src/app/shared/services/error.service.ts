import { Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  /**
   * Handle Firebase errors and throw user-friendly messages.
   * @param error - The FirebaseError instance
   */
  handleFirebaseError(error: FirebaseError): void {
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
    console.error(
      `[FirebaseError]: Code: ${error.code}, Message: ${error.message}`
    );
  }
}
