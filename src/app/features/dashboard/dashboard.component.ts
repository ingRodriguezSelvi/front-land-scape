import { Component } from '@angular/core';

@Component({
  selector: 'land-scape-dashboard',
  template: `
    <mat-drawer-container class="container" autosize>
      <mat-drawer #drawer class="sidenav" opened mode="side">
        <h1>{{title}}</h1>
          <mat-list>
            <div mat-subheader>Usuarios</div>
            <mat-list-item routerLink="/dashboard/list-of-user">
              <mat-icon matListItemIcon>person</mat-icon>
              <div matListItemTitle><a >Lista de usuarios</a></div>
            </mat-list-item>
            <mat-list-item routerLink="/dashboard/list-of-permission">
              <mat-icon matListItemIcon>policy</mat-icon>
              <div matListItemTitle><a >Lista de usuarios con permisos</a></div>
            </mat-list-item>
            <mat-list-item routerLink="/dashboard/create-user">
              <mat-icon matListItemIcon>add_circle</mat-icon>
              <div matListItemTitle><a >Crear usuarios</a></div>
            </mat-list-item>
          </mat-list>
      </mat-drawer>
      <land-scape-header (toggleSidenav)="drawer.toggle()"></land-scape-header>
      <div class="sidenav-content">
        <router-outlet></router-outlet>
      </div>
    </mat-drawer-container>
  `,
  styles: [
    `
      .mat-drawer {
        min-width: 15%;
        width: auto;
      }

      .mat-sidenav-container {
        height: 100%;
      }

      h1 {
        margin-left: 20px;
        margin-top: 20px;
        font-size: xx-large;
        color: white;
        font-weight: bold;
      }
      a{
        color: white;
        text-decoration: none;
      }

      .container {
        width: 100%;
        height: 100%;
      }

      .sidenav-content {
        height: 100%;
        margin: 60px 50px;
      }

      .sidenav {
        padding: 20px;
      }

    `
  ]
})
export class DashboardComponent {
  title = 'LandScape';
}
