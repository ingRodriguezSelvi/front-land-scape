import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface Column {
  name: string;
  dataKey: string;
}

export const ACTIONS_COLUMN: Column = {
  name: 'Acciones',
  dataKey: 'actions'
};
@Component({
  selector: 'land-scape-table',
  template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8" *ngIf="columns.length>0;else noData">
      <ng-container *ngFor="let column of columns" [matColumnDef]="column.dataKey">
        <th mat-header-cell *matHeaderCellDef> {{column.name}} </th>
        <td mat-cell *matCellDef="let element; let i=index;">
          <ng-container *ngIf="column.dataKey !== 'actions'">
            {{element[column.dataKey]}}
          </ng-container>
          <ng-container *ngIf="column.dataKey === 'actions'">
            <button mat-button (click)="onEdit(element)"><mat-icon>edit</mat-icon></button>
            <button mat-button (click)="onDelete(element)"><mat-icon>delete</mat-icon></button>
            <button mat-button (click)="onView(element)"><mat-icon>visibility</mat-icon></button>
          </ng-container>
        </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    <ng-template #noData>
      <p>No hay datos :(..</p>
    </ng-template>

  `,
  styles: [
    `
      .table {
        width: 100%;
      }

      .mat-mdc-row .mat-mdc-cell {
        border-bottom: 1px solid transparent;
        border-top: 1px solid transparent;
        cursor: pointer;
      }

      .mat-mdc-row:hover .mat-mdc-cell {
        border-color: currentColor;
      }

      .row-is-clicked {
        font-weight: bold;
      }
    `
  ]
})
export class TableComponent implements OnInit{

  @Input() columns: Column[] = [];
  @Input() dataSource: any[] = [];

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() view: EventEmitter<any> = new EventEmitter<any>();
  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map( column => column.dataKey);
    console.log('Columns'+this.columns);
    console.log('DataSource'+this.dataSource);
    console.log('DisplayedColumns'+this.displayedColumns)
  }

  onEdit(element: any) {
    this.edit.emit(element)
  }
  onDelete(element: any) {
    this.delete.emit(element)
  }

  onView(element: any) {
    this.view.emit(element)
  }

}
