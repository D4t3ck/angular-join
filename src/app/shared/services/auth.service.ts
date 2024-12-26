import { inject, Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { Auth, createUserWithEmailAndPassword, user } from '@angular/fire/auth';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private uiService = inject(UiService);
  user$ = user(this.auth);

  constructor() {}

  private guestMode = false;

  async createUser(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.uiService.navigate('/');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code === 'auth/email-already-in-use') {
        console.error('Diese E-Mail-Adresse wird bereits verwendet.');
        throw new Error(
          'Diese E-Mail-Adresse wird bereits verwendet. Bitte versuche es mit einer anderen E-Mail-Adresse.'
        );
      }

      console.error('user creation failed');
      throw error;
    }
  }
}
