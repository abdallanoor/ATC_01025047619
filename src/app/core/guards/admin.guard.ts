import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    const user = JSON.parse(storedUser);
    if (user.role === 'admin') {
      return true;
    }
  }

  router.navigate(['/']);
  return false;
};
