import {RouterModule, Routes} from "@angular/router";
import {ErrorPageComponent} from "./shared/components/error-page/error-page.component";
import {NgModule} from "@angular/core";
import {VerificationLoginTokenGuard} from "./features/auth/guards/verification-login-token.guard";
import {VerificationAuthLoggedGuard} from "./features/dashboard/guards/verification-auth-logged.guard";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(module => module.DashboardModule),
    canLoad: [VerificationAuthLoggedGuard],
    canActivate: [VerificationAuthLoggedGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(module => module.AuthModule),
    canLoad: [VerificationLoginTokenGuard],
    canActivate: [VerificationLoginTokenGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot ( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
