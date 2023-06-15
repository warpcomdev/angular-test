import { Component, ViewEncapsulation, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { AuthFacade } from '../../core/auth';

@Component({
  standalone: true,
  imports: [JsonPipe],
  template: `
    <div class="flex flex-col">
      <p>Home works!</p>
      <pre>{{ profile() | json }}</pre>
    </div>
    <button
      type="button"
      class="ml-2 inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
      (click)="logout()"
    >
      Logout
    </button>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  private readonly authFacade = inject(AuthFacade);

  profile = this.authFacade.user;

  logout() {
    this.authFacade.logout();
  }
}
