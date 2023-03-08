import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./components/login-form/login-form.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
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
export class AuthRoutingModule {}
