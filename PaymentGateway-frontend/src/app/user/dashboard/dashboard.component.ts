import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedplan: string = '';
  constructor(private route:Router){

  }
subscribe(){
  console.log("hloo");
  this.route.navigate(['user/method']);
  //this.route.navigate(['user/method'], { queryParams: { plan: this.selectedplan } });
}
}
