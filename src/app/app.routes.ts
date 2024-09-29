import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ImprintBlankComponent } from './imprint & privacy policy/imprint-blank/imprint-blank.component';
import { ImprintComponent } from './imprint & privacy policy/imprint/imprint.component';
import { PrivacyPolicyBlankComponent } from './imprint & privacy policy/privacy-policy-blank/privacy-policy-blank.component';
import { PrivacyPolicyComponent } from './imprint & privacy policy/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'imprint-blank', component: ImprintBlankComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'privacy-policy-blank', component: PrivacyPolicyBlankComponent },
  { path: '**', component: PageNotFoundComponent },
];
