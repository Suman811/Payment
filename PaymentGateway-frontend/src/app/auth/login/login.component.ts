import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  constructor (
     private fb: FormBuilder, 
     private route: Router, private toastr: ToastrService
    ) 
    { }

    loginform = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  
    showPassword = false;
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
    getControl(a: any) {
      return this.loginform.get(a);

    }
    saveForm() {
      console.log(this.loginform.value);
      }
      
      
  }
