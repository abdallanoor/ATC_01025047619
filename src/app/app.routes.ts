import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CongratulationsScreenComponent } from './components/congratulations-screen/congratulations-screen.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Sign in',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Create account ',
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
    title: 'Forgot password',
  },
  { path: '', component: HomeComponent, title: 'Tazkara' },
  {
    path: 'event/:id',
    component: EventDetailsComponent,
    title: 'Event details',
  },
  {
    path: 'congratulations',
    component: CongratulationsScreenComponent,
    title: 'Congratulations',
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Admin',
  },
];
