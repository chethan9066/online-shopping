import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

import { AuthenticationService, AuthResponseData } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  isLoginMode:boolean  =true;
  isLoading:boolean = false;
  error:string = null;

  constructor(private authService:AuthenticationService , private router:Router) { }

  ngOnInit(): void {
  }

  onSwitch(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authData:NgForm){
    // console.log(authData.value)
    if(!authData.form){
      return;
    }
    const email = authData.value.email;
    const password = authData.value.password;
    let authObs:Observable<AuthResponseData>;

    this.error =null;
    this.isLoading =true;

    if(this.isLoginMode){

      authObs =  this.authService.login(email,password);
      authData.reset();

    }else {
      authObs = this.authService.signUp(email , password);
      authData.reset();
    }

    authObs.subscribe(
      responseData => {
        // console.log(responseData);
        this.isLoading = false;
        this.router.navigate(['/recipe']);
      },
      errorMsg => {
        this.error = errorMsg;
        this.isLoading = false;
      }
    );
    
  }

  errorHandling(){
    this.error = null;
  }
}
