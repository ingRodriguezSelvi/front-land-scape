import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IResponse} from "../models/interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase = environment.USER_URL;
  constructor( private readonly  http:HttpClient ) { }

  getAllUsers():Observable<IResponse> {
    return this.http.get(this.urlBase);
  }
  deleteUser(id:string):Observable<IResponse> {
    return this.http.delete(`${this.urlBase}/${id}`,{
      headers: {
        'x-api-key': localStorage.getItem('token') || ''
      }
    });
  }
  updateUser(id:string, data:any):Observable<IResponse> {
    return this.http.put(`${this.urlBase}/${id}`, data);
  }
  createUser(data:any):Observable<IResponse> {
    return this.http.post(this.urlBase, data);
  }
}
