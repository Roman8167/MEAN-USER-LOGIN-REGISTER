import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  avatarImage:string = '../../assets/images/undraw_profile_pic_ic5t.png'
  constructor(private loginService:LoginService,private snackbar:MatSnackBar,private router:Router){}
  login(form:NgForm){

    this.loginService.login(form.value).subscribe(res=>{
      if(res.success==false){
        this.snackbar.open(res.message,"Dismiss")
        localStorage.clear()



      }
      else{
        if(res.success==true){
          this.snackbar.open(res.message,"Dismiss");
          const token = {id_token:res.token,loggedIn:true,expiry:new Date().getTime() + 24*60*60*1000,date_joined:res.user.dateJoined}
          localStorage.setItem("id_token",JSON.stringify(token))
          localStorage.setItem("user",JSON.stringify(res.user))
          this.router.navigate(["/dashboard"]).then(()=>{
            location.reload(true)
          })

        }
      }
    })

  }


}
