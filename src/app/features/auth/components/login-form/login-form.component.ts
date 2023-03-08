import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {User} from "../../../dashboard/models/interfaces";
import {IUserAuth} from "../../models/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'land-scape-login-form',
  template: `
    <div class="background">
      <div class="container-login" fxLayout="row grap" fxLayoutAlign="space-between center">
        <mat-card fxFlex="100">
          <mat-card-header>
            <mat-card-title>
              <h1>Iniciar sesión</h1>
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form fxLayout="column" fxLayoutGap="20px" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
              <mat-form-field>
                <input matInput placeholder="Email" formControlName="email">
                <mat-error *ngIf="loginForm.get('email')!.hasError!('required')">
                  El email es requerido
                </mat-error>
                <mat-error *ngIf="loginForm.get('email')!.hasError!('email')">
                  El email no es valido
                </mat-error>
              </mat-form-field>
              <mat-form-field>
                <input matInput placeholder="Contraseña" formControlName="password" type="password">
                <mat-error *ngIf="loginForm.get('password')!.hasError!('required')">
                  La contraseña es requerida
                </mat-error>
              </mat-form-field>
              <button mat-raised-button color="primary" type="submit" [disabled]="loginForm.invalid">Iniciar sesión</button>
            </form>
          </mat-card-content>
        </mat-card>
      </div>
    </div>

  `,
  styles: [
    `
        h1 {
            color: white;
        }
        .container-login {
            margin: auto;
            width: 50%;
            height: 100vh;
            padding: 10px;
        }

        .background {
            background-image: url("https://photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg");
        }
    `
  ]
})
export class LoginFormComponent {

  constructor(private readonly fb:FormBuilder, private readonly authService:AuthService, private readonly router:Router) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const user:IUserAuth = {
      email: this.loginForm.get('email')!.value!,
      password: this.loginForm.get('password')!.value!
    }
   this.authService.login(user).subscribe(res => {
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['/dashboard']);
      }
   });
  }

}
