import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('user') !== null) {
    router.navigate(['/']);
    return false;
  } else {
    return true;
  }
};
