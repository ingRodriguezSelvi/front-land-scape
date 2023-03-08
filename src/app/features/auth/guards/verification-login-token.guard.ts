import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationLoginTokenGuard implements  CanLoad {

  constructor( private router: Router ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.verificationTokenInLocalStorage()) {
      this.router.navigate(['/dashboard'])
      return false;
    }
    return true;
  }

  private verificationTokenInLocalStorage() {
    return !!localStorage.getItem('token'); // exist token
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.verificationTokenInLocalStorage()) {
      this.router.navigate(['/dashboard'])
      return false;
    }
    return true;

  }
}
