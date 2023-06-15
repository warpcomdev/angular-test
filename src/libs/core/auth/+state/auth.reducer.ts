import { createReducer, on, Action } from '@ngrx/store';

import { AuthActions } from './auth.actions';
import { LoginError, User, UserProfile } from '../models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  profile: UserProfile | null;
  ready: boolean;
  loading: boolean;
  error: LoginError | null;
}

export interface UserPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  profile: null,
  ready: false,
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.init, () => ({ ...initialState })),
  on(AuthActions.markAsInit, (state) => ({ ...state, ready: true })),
  on(AuthActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginError, (state, { error }) => ({
    ...state,
    user: null,
    profile: null,
    loading: false,
    isAuthenticated: false,
    error,
  })),
  on(AuthActions.setProfile, (state, { profile }) => ({
    ...state,
    profile,
    loading: false,
    isAuthenticated: true,
  })),
  on(AuthActions.logout, () => ({ ...initialState }))
);

export function userReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
