import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('access_token');

  if (token) {
    // 🔵 Si existe token, permite pasar
    return true;
  } else {
    // 🔴 Si no hay token, redirige al login
    router.navigate(['/login']);
    return false;
  }
};
