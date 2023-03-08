import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserAuth} from "./models/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlBase = environment.AUTH_URL;
  constructor( private readonly http:HttpClient) { }


  login( userAuth:IUserAuth ):Observable<any> {
    return this.http.post(`${this.urlBase}/login`, userAuth)
  }

  logOut(): void {
    localStorage.clear();
  }
}
