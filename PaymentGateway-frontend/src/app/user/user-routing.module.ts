import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MethodComponent } from './method/method.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'method',component:MethodComponent},
  {path:'summary',component:SummaryComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
