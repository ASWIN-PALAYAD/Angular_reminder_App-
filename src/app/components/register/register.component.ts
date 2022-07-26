import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    userid:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    password:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  register(){

    var name = this.registerForm.value.name
    var userid = this.registerForm.value.userid
    var password = this.registerForm.value.password

    if(this.registerForm.valid){
      this.ds.register(name,userid,password)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl('')
        }
      },
      result=>{
        alert(result.error.message)
      })

    }
    else{
      alert("invalid form")
    }

  }

}
 