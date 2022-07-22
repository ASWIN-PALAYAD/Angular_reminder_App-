import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginform=this.fb.group({
    userid:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    password:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router ) { }

  ngOnInit(): void {
  }

  login(){
    var userid = this.loginform.value.userid
    var password = this.loginform.value.password

    if(this.loginform.valid){
      this.ds.login(userid,password)
      .subscribe((result:any)=>{
        if(result){
          localStorage.setItem('loggedUser',result.loggedUser)
          localStorage.setItem('loggedUserId',result.loggedUserId)
          localStorage.setItem('token',result.token)
          alert(result.message)
          this.router.navigateByUrl('dashboard')
        }


      },
      result=>{
        alert(result.error.message)
      })
      }else{
        alert("invalid form ")
      }
    }
 
  }


