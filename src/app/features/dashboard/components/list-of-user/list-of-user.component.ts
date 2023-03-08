import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IResponse, IUserPagination, User} from "../../models/interfaces";
import {ACTIONS_COLUMN} from "../table/table.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateUserComponent} from "../create-user/create-user.component";

@Component({
  selector: 'land-scape-list-of-user',
  template: `
    <ng-container *ngIf="!viewAccess;else listAccess">
      <h1>Lista de usuarios</h1>
      <button mat-raised-button routerLink="/dashboard/create-user" color="primary">
        <mat-icon>person</mat-icon>
        Crear usuario
      </button>
      <land-scape-table [columns]="columns"
                        [dataSource]="users"
                        (delete)="deleteUser($event._id)"
                        (edit)="editUser($event)"
                        (view)="viewAccessOfUser($event)"
                        *ngIf="users.length>0">

      </land-scape-table>
    </ng-container>
    <ng-template #listAccess>
      <button mat-raised-button (click)="viewAccess= false" color="primary">
        <mat-icon>arrow_back</mat-icon>
        Volver
      </button>
      <land-scape-list-of-access [user]="user"></land-scape-list-of-access>
    </ng-template>

  `,
  styles: [
    `
      button {
        margin-bottom: 20px;
      }
    `
  ]
})
export class ListOfUserComponent implements OnInit {

  viewAccess = false;

  user?: User;

  constructor(private readonly userService: UserService, private readonly dialog:MatDialog) {
  }

  users: User[] = [];
  columns = [
    {name: 'Id', dataKey: '_id'},
    {name: 'Nombre', dataKey: 'fullName'},
    {name: 'Correo', dataKey: 'email'},
    {name: 'Fecha de creación', dataKey: 'createdAt'},
    ACTIONS_COLUMN
  ];

  ngOnInit(): void {
    this.viewAccess = false;
    this.userService.getAllUsers().subscribe((res: IResponse) => {
      const userRes = res.data as IUserPagination;
      this.users = userRes.users || [];
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((res: IResponse) => {
      this.users = this.users.filter((user: User) => user._id !== id);
    });
  }

  editUser(user: User) {
    this.dialog.open(CreateUserComponent, {
      data: user,
      width: '500px',
    })
  }

  viewAccessOfUser(user: User) {
    console.log('Hello')
    this.user = user;
    this.viewAccess = true;
  }


}
