import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  const enabled = sessionStorage.getItem('enabled');
  const role = sessionStorage.getItem('role');
  const router = inject(Router);
  if (role == 'ROLE_ADMIN' && enabled == 'true') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
