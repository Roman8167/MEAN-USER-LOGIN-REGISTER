import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { RegisterModel } from '../model/register-user-list.model';
@Injectable({providedIn:'root'})
export class RegisterService{
  readonly url:string = "http://localhost:3000/signup"
  constructor(private http:HttpClient){}
  register(registerModel:RegisterModel){
    return this.http.post(this.url,registerModel)
  }
}
