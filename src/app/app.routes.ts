import { Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { SignUpComponent } from './main/sign-up/sign-up.component';
import { SummaryComponent } from './main/summary/summary.component';
import { AddTaskComponent } from './main/add-task/add-task.component';
import { BoardComponent } from './main/board/board.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { ImprintComponent } from './imprint & privacy policy/imprint/imprint.component';
import { ImprintBlankComponent } from './imprint & privacy policy/imprint-blank/imprint-blank.component';
import { PrivacyPolicyComponent } from './imprint & privacy policy/privacy-policy/privacy-policy.component';
import { PrivacyPolicyBlankComponent } from './imprint & privacy policy/privacy-policy-blank/privacy-policy-blank.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'board', component: BoardComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'imprint-blank', component: ImprintBlankComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'privacy-policy-blank', component: PrivacyPolicyBlankComponent },
  { path: '**', component: PageNotFoundComponent },
];
