import { Routes } from '@angular/router';
import { MainContentComponent } from './main/main-content.component';
import { LoginComponent } from './main/login/login.component';
import { SignUpComponent } from './main/sign-up/sign-up.component';
import { SummaryComponent } from './main/summary/summary.component';
import { AddTaskComponent } from './main/add-task/add-task.component';
import { BoardComponent } from './main/board/board.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { ImprintComponent } from './user-informations/imprint/imprint.component';
import { PrivacyPolicyComponent } from './user-informations/privacy-policy/privacy-policy.component';
import { UserHelpComponent } from './user-informations/user-help/user-help.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'main', component: MainContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'board', component: BoardComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'user-help', component: UserHelpComponent },
  { path: '**', component: PageNotFoundComponent },
];
