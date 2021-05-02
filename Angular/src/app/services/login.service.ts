import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login-list.model';
@Injectable({providedIn:'root'})
export class LoginService{
  readonly url:string = "http://localhost:3000/login"
  readonly logoutUrl:string = "http://localhost:3000/logout"
  constructor(private http:HttpClient){}
  login(loginModel:LoginModel){
    return this.http.post(this.url,loginModel)
  }
  logout(){
    return this.http.delete(this.logoutUrl)
  }

}
