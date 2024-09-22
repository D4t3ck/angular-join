import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, data: { animation: 'openClosePage' } },
    { path: '**', component: PageNotFoundComponent },
];
