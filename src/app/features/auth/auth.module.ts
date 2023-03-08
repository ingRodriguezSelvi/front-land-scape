import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexModule,
    SharedModule
  ]
})
export class AuthModule {
}
