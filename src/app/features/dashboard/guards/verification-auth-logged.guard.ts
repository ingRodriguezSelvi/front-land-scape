import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationAuthLoggedGuard implements  CanLoad {

  constructor( private router: Router ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log(this.verificationTokenInLocalStorage())
    if (this.verificationTokenInLocalStorage()) {
      this.router.navigate(['/auth/login'])
    }
    return !this.verificationTokenInLocalStorage();
  }

  private verificationTokenInLocalStorage(): boolean {
    return !localStorage.getItem('token') // don't exist token
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.verificationTokenInLocalStorage())
    if (this.verificationTokenInLocalStorage()) {
      this.router.navigate(['/auth/login'])
    }
    return !this.verificationTokenInLocalStorage();
  }
}
