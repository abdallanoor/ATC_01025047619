import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { HomeComponent } from './pages/home/home.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { CongratulationsScreenComponent } from './components/congratulations-screen/congratulations-screen.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminEventListComponent } from './components/admin-event-list/admin-event-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { isLoggedInGuard } from './core/guards/is-logged-in.guard';
import { isAdminGuard } from './core/guards/admin.guard';
import { isRegularUserGuard } from './core/guards/regular-user.guard';
import { BookingsComponent } from './pages/bookings/bookings.component';

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
    path: 'bookings',
    component: BookingsComponent,
    title: 'My bookings',
    canActivate: [isRegularUserGuard],
  },
  {
    path: 'congratulations/:id',
    component: CongratulationsScreenComponent,
    title: 'Congratulations',
    canActivate: [isRegularUserGuard],
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
