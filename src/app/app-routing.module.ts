import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditComponent } from './components/edit/edit.component';
import { EventComponent } from './components/event/event.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:'',component: LoginComponent
  },

  {
    path:'register',component:RegisterComponent
  },

  {
    path:'dashboard',component:DashboardComponent
  },
  
  {
    path:'event',component:EventComponent
  },

  {
    path: 'edit', component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
