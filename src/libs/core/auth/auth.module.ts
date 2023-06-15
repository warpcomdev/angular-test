import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AUTH_FEATURE_KEY, reducer, AuthEffects } from './+state';

@NgModule({
  imports: [
    StoreModule.forFeature(AUTH_FEATURE_KEY, reducer),
    EffectsModule.forFeature(AuthEffects),
  ],
})
export class AuthModule {}
