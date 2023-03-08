import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {ListOfUserComponent} from "./components/list-of-user/list-of-user.component";
import {ListOfPermissionComponent} from "./components/list-of-permission/list-of-permission.component";
import {CreateUserComponent} from "./components/create-user/create-user.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list-of-user',
        component: ListOfUserComponent
      },
      {
        path: 'list-of-permission',
        component: ListOfPermissionComponent
      },
      {
        path: 'create-user',
        component: CreateUserComponent
      },
      {
        path: '**',
        redirectTo: 'list-of-user'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
