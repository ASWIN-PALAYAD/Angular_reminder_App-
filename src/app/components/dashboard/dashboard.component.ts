import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName = localStorage.getItem('loggedUser')

  eventForm=this.fb.group({
    date : [''],
    message : ['']
  })

  constructor(private ds:DataService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('loggedUser')){
      alert("please login")
      this.router.navigateByUrl("")
    }
  }


  addEvent(){
    var date = this.eventForm.value.date
    var message = this.eventForm.value.message

    console.log(date);
    console.log(message);

    this.ds.addEvent(date,message)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl('event')
      }
    },
    result=>{
      alert(result.error.message)
    })
    
  }

  signOut(){
    localStorage.removeItem("loggedUser")
    localStorage.removeItem("loggedUserId")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }

}
