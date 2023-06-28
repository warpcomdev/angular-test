import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AUTH_FEATURE_KEY, reducer, AuthEffects } from './+state';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    StoreModule.forFeature(AUTH_FEATURE_KEY, reducer),
    EffectsModule.forFeature(AuthEffects),
    CommonModule
  ],
})
export class AuthModule {}
