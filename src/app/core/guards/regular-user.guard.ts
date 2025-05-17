import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isRegularUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    const user = JSON.parse(storedUser);
    if (user.role === 'user') {
      return true;
    }
  }

  router.navigate(['/']);
  return false;
};
