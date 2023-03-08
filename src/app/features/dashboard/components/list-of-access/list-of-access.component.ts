import {Component, Input, OnInit} from '@angular/core';
import {IAccess, IResponse, User} from "../../models/interfaces";
import {PermissionService} from "../../services/permission.service";
import {AccessService} from "../../services/access.service";

interface AccessToUser {
  _id: string;
  name: string;
  date: Date;
}
@Component({
  selector: 'land-scape-list-of-access',
  template: `
      <h1>List Of Access for User: {{user!.email}}</h1>
      <land-scape-table [columns]="columns" [dataSource]="accessOfUser" *ngIf="viewTable;else nodata" ></land-scape-table>
      <ng-template #nodata>
        <h1>No hay datos</h1>
      </ng-template>

  `,
  styles: [``]
})
export class ListOfAccessComponent implements OnInit{

  constructor( private readonly accessService: AccessService) {
  }

  @Input() user?: User;

  columns = [
    {name: 'Id', dataKey: '_id'},
    {name: 'Nombre', dataKey: 'name'},
    {name: 'Ultimo acceso', dataKey: 'date'}
  ];

  accessOfUser:AccessToUser[] = [];

  viewTable = false;

  ngOnInit(): void {
    this.getAccessToUser();
  }

  private getAccessToUser() {
    this.accessService.getAccessOfUser(this.user!._id!).subscribe((res: any) => {
      const accessRes = res.data.access;
      accessRes.forEach((access: IAccess) => {
        this.accessOfUser.push({
          _id: this.user!._id!,
          name: this.user!.fullName!,
          date: access.createdAt
        });
      });
      if (accessRes.length > 0){
        this.viewTable = true;
      }// end forEach
    });
  }
}
