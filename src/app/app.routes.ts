import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CongratulationsScreenComponent } from './components/congratulations-screen/congratulations-screen.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminEventListComponent } from './components/admin-event-list/admin-event-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { authGuard } from './core/guards/auth.guard';
import { isLoggedInGuard } from './core/guards/is-logged-in.guard';
import { isAdminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Sign in',
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Create account ',
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
    title: 'Forgot password',
    canActivate: [isLoggedInGuard],
  },
  { path: '', component: HomeComponent, title: 'Tazkara' },
  {
    path: 'event/:id',
    component: EventDetailsComponent,
    title: 'Event details',
  },
  {
    path: 'congratulations/:id',
    component: CongratulationsScreenComponent,
    title: 'Congratulations',
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [isAdminGuard],
    children: [
      {
        path: '',
        component: AdminEventListComponent,
        title: 'Admin',
      },
      {
        path: 'event/create',
        component: CreateEventComponent,
        title: 'Create Event',
      },
      {
        path: 'event/edit/:id',
        component: EditEventComponent,
        title: 'Edit Event',
      },
    ],
  },
];
