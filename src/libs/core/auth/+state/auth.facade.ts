import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { Credentials } from '../models';

import { AuthActions } from './auth.actions';
import { selectAuthState, selectUserIsAuthenticated } from './auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly store = inject(Store);

  user = this.store.selectSignal(selectAuthState);
  isAuthenticated = this.store.selectSignal(selectUserIsAuthenticated);

  init() {
    this.store.dispatch(AuthActions.init());
  }

  login(credentials: Credentials) {
    this.store.dispatch(AuthActions.login({ credentials }));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
