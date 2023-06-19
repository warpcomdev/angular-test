import { Component, inject, OnInit, ViewEncapsulation } from "@angular/core";
import { CommonModule, JsonPipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

import { AuthFacade } from "../../core/auth";

@Component({
	standalone: true,
	imports: [JsonPipe, RouterLink, FormsModule, MatInputModule, ReactiveFormsModule, CommonModule],
	template: `
		<div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
			<div class="mt-12 sm:mx-auto sm:w-full sm:max-w-sm logo">
				<div class="flex justify-center items-center">
					<img src="assets/logo.png" alt="" />
				</div>
			</div>

			<div class="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center" style="margin-top: 90px;">
				<form class="space-y-6" (ngSubmit)="login()" [formGroup]="formGroup">
					<div>
						<div class="mt-2">
							<input name="username" type="text" formControlName="username" placeholder="usuario" class="block" />
						</div>
					</div>

					<div>
						<div class="mt-2 input-wrapper">
							<input
								name="password"
								type="{{ show ? 'text' : 'password' }}"
								placeholder="contraseña"
								formControlName="password"
								class="input password block shadow-sm  sm:text-sm sm:leading-6"
							/>

							<div (click)="showPassword()">
								<svg class="input-icon password" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3 3L21 21" stroke="#C9EFF4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
									<path
										d="M10.5 10.6768C10.1888 11.0293 10 11.4924 10 11.9997C10 13.1042 10.8954 13.9997 12 13.9997C12.5072 13.9997 12.9703 13.8109 13.3229 13.4997"
										stroke="#C9EFF4"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M7.36185 7.56152C5.68002 8.74011 4.27894 10.4193 3 12.0005C4.88856 14.9914 8.2817 18.0005 12 18.0005C13.5499 18.0005 15.0434 17.4776 16.3949 16.6512"
										stroke="#C9EFF4"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M12 6C16.0084 6 18.7015 9.1582 21 12C20.6815 12.5043 20.3203 13.0092 19.922 13.5"
										stroke="#C9EFF4"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div>
						<div class="mt-2">
							<input name="service" type="text" formControlName="service" placeholder="servicio" class="block  sm:text-sm sm:leading-6" />
						</div>
					</div>

					<div class="flex justify-between items-center ">
						<div class="flex justify-between items-center ">
							<img src="assets/bandera.png" alt="" />
							<img src="assets/arrow.png" alt="" style="margin-left: 10px;" />
						</div>

						<div class="">
							<button
								(click)="login()"
								[disabled]="formGroup.invalid"
								[ngClass]="formGroup.invalid ? 'disabled-button' : 'btn-login'"
								class=" mt-2 flex justify-center rounded-md bg-white  text-sm font-semibold leading-6 shadow-sm focus-visible:outline"
							>
								acceder
							</button>
						</div>
					</div>
				</form>
			</div>
			<div class="sm:mx-auto sm:w-full sm:max-w-sm logo">
				<div class="flex justify-center items-center">
					<img src="assets/telefonica.png" alt="" style="margin-top: 62px;" />
				</div>
			</div>

			<div class="grid md:grid-cols-2 sm:grid-cols-1 mt-10">
				<div class="flex items-center">
					<img src="assets/telefonica_white.png" alt="" />
					<p class="term">Urbo (2.16.1 45c9eac) © Telefónica S.A. 2023</p>
				</div>
				<div class="flex md:justify-end sm:justify-center items-center">
					<a class="menu">Términos y condiciones</a>
					<span class="separador">|</span>
					<a class="menu">Política de cookies</a>
					<span class="separador">|</span>
					<a class="menu">Aviso legal</a>
				</div>
			</div>
		</div>

		<!-- <pre>{{ user() | json }}</pre> -->
	`,
	encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
	public formGroup: FormGroup = new FormGroup({});
	// formGroup: FormGroup;

	constructor(public formBuilder: FormBuilder) {
		// this.buildForm();
		// this.formGroup = this.formBuilder.group({
		// 	username: new FormControl("", [Validators.required]),
		// 	password: new FormControl("", [Validators.required]),
		// 	service: new FormControl("", [Validators.required]),
		// });
	}

	private readonly authFacade = inject(AuthFacade);
	show: boolean = false;
	user = this.authFacade.user;
	// username!: string;
	// password!: string;
	// service!: string;

	public ngOnInit() {
		this.buildForm();
	}

	private buildForm() {
		this.formGroup = this.formBuilder.group({
			username: ["", Validators.required],
			password: ["", Validators.required],
			service: ["", Validators.required],
		});
	}

	login() {
		const credentials = {
			username: this.formGroup.value.username,
			password: this.formGroup.value.password,
			service: this.formGroup.value.service,
		};

		this.authFacade.login(credentials);
	}

	showPassword() {
		this.show = !this.show;
	}
}
