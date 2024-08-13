import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MethodComponent } from './method/method.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MethodComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatDialogModule
  ]
})
export class UserModule { }
