import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/interfaces";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'land-scape-create-user',
  template:
    `
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <h1>Crear usuario</h1>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form action="" (ngSubmit)="save()" fxLayout="column" [formGroup]="formActivity">
            <mat-form-field fxFlex="100" appearance="outline">
              <mat-label>Nombre completo</mat-label>
              <input matInput formControlName="fullName">
            </mat-form-field>
            <mat-form-field fxFlex="100" appearance="outline">
              <mat-label>Correo electronico</mat-label>
              <input matInput formControlName="email">
            </mat-form-field>
            <mat-form-field fxFlex="100" appearance="outline">
              <mat-label>Contraseña</mat-label>
              <input type="password" matInput formControlName="password">
            </mat-form-field>
            <div align="end">
              <button mat-button (click)="close()" routerLink="/dashboard/list-of-user">Cancelar</button>
              <button mat-raised-button color="primary" type="submit"
              >{{user ? 'Actualizar' : 'Crear usuario'}}</button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    `,
  styles: [
    `
      h1 {
        color:white;
      }
    `
  ]
})
export class CreateUserComponent implements OnInit{
  constructor(private readonly fb: FormBuilder,
              private readonly userService:UserService,
              private readonly router: Router,
              public dialogRef: MatDialogRef<CreateUserComponent>,
              @Inject(MAT_DIALOG_DATA) public user: User) {

  }

  ngOnInit(): void {
    if (this.user) {
      this.formActivity.patchValue(this.user);
    }
  }

  formActivity: FormGroup = this.fb.group({
    id: [null],
    fullName: [undefined, [Validators.required, Validators.minLength(3)]],
    email: [undefined, [Validators.required, Validators.email]],
    password: [undefined, [Validators.required, Validators.minLength(6)]],
  });

  save() {
    if (this.formActivity.invalid) {
      this.formActivity.markAllAsTouched();
      return;
    }
    this.userService.createUser(this.formActivity.value).subscribe((res) => {
      if (res.ok){
        this.router.navigate(['/dashboard/list-of-user']);
      }
    });
  }

  close(){
   this.dialogRef.close();
  }

}
