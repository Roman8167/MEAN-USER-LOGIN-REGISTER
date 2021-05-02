import { Component, OnInit } from "@angular/core";
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';





@Component({
  templateUrl:'./dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})

export class DashBoardComponent implements OnInit{
    nature:string = "../../assets/images/nature.jpg"
    fullname?:string;
    dateJoined?:string
    constructor(private dashboard:DashboardService,private router:Router,private loginService:LoginService){}
    ngOnInit(){
      this.dashboard.authGuard();
      const user = localStorage.getItem("user");
      this.fullname = JSON.parse(user).fullname;
      this.dateJoined = `${new Date(JSON.parse(user).dateJoined).getDay()}/${new Date(JSON.parse(user).dateJoined).getMonth()}/${new Date(JSON.parse(user).dateJoined).getFullYear()}`
      
    }
    logout(){
      this.loginService.logout();
      localStorage.clear();
      this.router.navigate(["/"]).then(()=>{
        location.reload(true)
      })

    }


}


