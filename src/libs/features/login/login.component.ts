import { Component, inject, OnInit, ViewEncapsulation } from "@angular/core";
import { CommonModule, JsonPipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

import { AuthFacade } from "../../core/auth";

@Component({
  standalone: true,
  imports: [JsonPipe, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  private readonly authFacade = inject(AuthFacade);

  user = this.authFacade.user;
  username!: string;
  password!: string;
  service!: string;
  desplegable!:boolean;

  login() {
    const credentials = {
      username: this.username,
      password: this.password,
      service: this.service,
    };
    
    this.authFacade.login(credentials);
  }
}
