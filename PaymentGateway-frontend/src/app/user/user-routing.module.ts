import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MethodComponent } from './method/method.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'method',component:MethodComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
