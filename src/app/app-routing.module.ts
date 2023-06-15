import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '../libs/core/auth';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../libs/features/login').then((m) => m.routes),
  },
  {
    path: 'home',
    canActivate: [authGuard()],
    loadChildren: () => import('../libs/features/home').then((m) => m.routes),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
