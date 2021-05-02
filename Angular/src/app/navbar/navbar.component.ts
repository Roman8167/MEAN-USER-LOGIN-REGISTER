import { Component, OnInit } from "@angular/core";
import { DashboardService } from '../services/dashboard.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../services/login.service';

@Component({
  selector:'app-navbar',
  templateUrl:'./navbar.compoent.html',
  styleUrls:['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
    constructor(private logoutService:LoginService,private router:Router,private snackBar:MatSnackBar){}
    isLoggedIn?:boolean
    ngOnInit(){
      const loggedIn= JSON.parse(localStorage.getItem("id_token")).loggedIn;
      if(loggedIn==true){
        this.isLoggedIn = loggedIn;
        this.snackBar.open("Successfully Logged In...","Dismiss")

      }
      else{
        this.snackBar.open("Please Login..","Dismiss")
        this.router.navigate(['/login']);



      }

    }
    
    logout(){
      this.logoutService.logout()
      localStorage.clear();
      this.router.navigate(["/"])
      location.reload(true)
    }
}
