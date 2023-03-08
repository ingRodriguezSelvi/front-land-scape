import {Component, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'land-scape-header',
  template: `
    <mat-toolbar fxLayout.lt-md="column" fxLayout="row" fxLayoutAlign="space-between center">
      <button mat-icon-button (click)="openSidenav()">
        <mat-icon>menu</mat-icon>
      </button>
      <span fxFlex>Dashboard</span>
      <button mat-raised-button (click)="logout()"><mat-icon>logout</mat-icon> Cerrar sesion</button>
    </mat-toolbar>
  `,
  styles: [
    `
      span {
        font-size: 30px;
        font-weight: bold;
      }
    `
  ]
})
export class HeaderComponent {

  constructor( private readonly router: Router) {
  }

  @Output() toggleSidenav:EventEmitter<any> = new EventEmitter<any>();

  openSidenav(){
    this.toggleSidenav.emit();
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
