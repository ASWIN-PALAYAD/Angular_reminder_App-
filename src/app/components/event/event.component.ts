import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events : any=[];
  loggedUserId = localStorage.getItem('loggedUserId')


  

  constructor(private ds: DataService,private router : Router) { 
    this.ds.getEvent(this.loggedUserId)
    .subscribe((result:any)=>{
      this.events=result.event 
      
    },
    result=>{
      alert(result.error.message)
    })
  }

  ngOnInit(): void {
  }

  removeEvent(k:any){
    this.ds.removeEvent(k)
    .subscribe((result:any)=>{
      if(result){
        window.location.reload();
      }
    },
    result=>{
      alert(result.error.message)
    })

  }



  
}


