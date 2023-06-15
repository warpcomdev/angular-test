import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, of, map, tap, catchError } from 'rxjs';

import { AuthService } from '../api';

import { AuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          map((profile) => AuthActions.setProfile({ profile })),
          catchError((error) => of(AuthActions.loginError({ error })))
        )
      )
    )
  );

  profile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.setProfile),
        tap(() => this.router.navigateByUrl('home'))
      ),
    {
      dispatch: false,
    }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => this.router.navigateByUrl('login')),
      map(() => AuthActions.markAsInit())
    )
  );
}
