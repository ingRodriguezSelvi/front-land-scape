import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { ListOfUserComponent } from './components/list-of-user/list-of-user.component';
import { ListOfPermissionComponent } from './components/list-of-permission/list-of-permission.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import {SharedModule} from "../../shared/shared.module";
import {HeaderComponent} from "./components/header/header.component";
import { TableComponent } from './components/table/table.component';
import {FlexModule} from "@angular/flex-layout";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { ListOfAccessComponent } from './components/list-of-access/list-of-access.component';
@NgModule({
  declarations: [
    DashboardComponent,
    ListOfUserComponent,
    ListOfPermissionComponent,
    CreateUserComponent,
    HeaderComponent,
    TableComponent,
    ListOfAccessComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FlexModule,
  ],
  providers: [
  ]
})
export class DashboardModule { }
