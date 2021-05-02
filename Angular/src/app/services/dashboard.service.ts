import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({providedIn:'root'})
export class DashboardService{
    url:string = "http://localhost:3000/dashboard"
    constructor(private http:HttpClient,private router:Router,private snackbar:MatSnackBar){}
    authGuard(){
      const token = localStorage.getItem("id_token");
      const now = new Date()
      if(token){
        if(now.getTime() > JSON.parse(token).expiry){
            this.snackbar.open("Session Expired!","Dismiss");
            localStorage.clear()
            this.router.navigate(["/login"])
        }
      }
      else{
        this.snackbar.open("Please Login..","Dismiss")
        this.router.navigate(["/login"])
      }


    }
}
