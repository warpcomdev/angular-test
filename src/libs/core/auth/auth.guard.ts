import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { AuthFacade } from './+state';

export function authGuard(): CanActivateFn {
  return () => {
    const authFacade = inject(AuthFacade);

    if (authFacade.isAuthenticated()) {
      return true;
    }
    authFacade.logout();
    return false;
  };
}
