import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthFacade } from '../libs/core/auth';

@Component({
  selector: 'app-root',
  template: ` <router-outlet /> `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  private readonly authFacade = inject(AuthFacade);

  ngOnInit(): void {
    this.authFacade.init();
  }
}
