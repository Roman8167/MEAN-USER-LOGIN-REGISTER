import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from "@angular/material/snack-bar";
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  registerImage:string = '../../assets/images/undraw_Account_re_o7id.png';
  constructor(private registerService:RegisterService,private snackbar:MatSnackBar,private router:Router){}
  register(form:NgForm){
    this.registerService.register(form.value).subscribe(res=>{
        if(res.success==false){
          this.snackbar.open(res.message,"Dismiss")
        }
        else{
          if(res.success==true){
              this.snackbar.open(res.message,"Dismiss")
              this.router.navigate(['/login'])
          }
        }
    })
  }

}
