import { Injectable } from '@angular/core';

import { Observable, delay, of, pipe, throwError } from 'rxjs';

import { Credentials } from '../models';

const FAKE_ERROR = {
  errCode: 1000,
  statusCode: 401,
  message: 'The user credentials are not valid',
  name: 'HttpErrorResponse',
};

const FAKE_PROFILE = {
  scopesTree: undefined,
  userScopesData: {},
  defaultPanel: {
    slug: 'grid-panel-test-00002',
    name: 'Grid panel test',
  },
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(credentials: Credentials): Observable<any> {
    if (this.isWronUser(credentials)) {
      return throwError(() => FAKE_ERROR).pipe(delay(2000));
    }

    return of(FAKE_PROFILE).pipe(delay(2000));
  }

  private isWronUser({ username, password, service }: Credentials) {
    return (
      username !== 'user' || password !== 'password' || service !== 'service'
    );
  }
}
