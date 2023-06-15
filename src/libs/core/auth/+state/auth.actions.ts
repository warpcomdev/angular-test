import { createAction, props } from '@ngrx/store';

import { Credentials, LoginError, UserProfile } from '../models';

export const AuthActions = {
  init: createAction('[Auth] Init Auth'),
  markAsInit: createAction('[Auth] Mark As Init'),
  login: createAction(
    '[Auth] Login User',
    props<{ credentials: Credentials }>()
  ),
  logout: createAction('[Auth] Logout User'),
  setProfile: createAction(
    '[Auth] Set Profile',
    props<{ profile: UserProfile }>()
  ),
  loginError: createAction(
    '[Auth] Login User Failure',
    props<{ error: LoginError }>()
  ),
};
