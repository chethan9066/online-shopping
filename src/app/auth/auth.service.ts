import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

import { Users } from './user.model';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

export interface AuthResponseData {
    idToken :string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?:boolean;

}


@Injectable({
    providedIn : 'root'
})

export class AuthenticationService {
    user = new BehaviorSubject<Users>(null);

    constructor( private http:HttpClient , private router:Router) {}

    signUp(email:string , password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcikQQsPk4s-aQ-b1iVdF_Ziqw7lg98ek',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            catchError(this.ErrorHandling) ,
            tap(
                resData => {
                    this.HandlingAuthentication(
                        resData.email,
                        resData.localId,
                        resData.idToken,
                        + resData.expiresIn
                    )
                }
            )
        )
    }

    login(email:string , password:string){

        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcikQQsPk4s-aQ-b1iVdF_Ziqw7lg98ek',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.ErrorHandling ),
            tap(
                resData => {
                    this.HandlingAuthentication(
                        resData.email,
                        resData.localId,
                        resData.idToken,
                        + resData.expiresIn
                    )
                }
            )
        )

    }

    logout(){
        this.user.next(null);
        localStorage.removeItem('userData');
        this.router.navigate(['/auth']);
    }

    autoLogin(){
        const userData:{
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string

        } = JSON.parse(localStorage.getItem('userData'));
        
        if(!userData){
            return;
        }

        const user = new Users(userData.email , userData.id , userData._token ,new Date(userData._tokenExpirationDate) );
        this.user.next(user);
    }

    private ErrorHandling(errorRes){
        let errorMsg = "An unkown error occured!";

        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMsg);
        }

        switch(errorRes.error.error.message){
            case 'EMAIL_NOT_FOUND': errorMsg = 'Email Not Found';
            break;
            case 'INVALID_PASSWORD' : errorMsg = 'Password is Invalid';
            break;
            case 'EMAIL_EXISTS': errorMsg = 'This Email Already Exist';
        }

        return throwError(errorMsg);   
    }

    private HandlingAuthentication(email:string ,userId:string, token:string,expiresIn:number ){
            const expirationDate = new Date(
                new Date().getTime() + expiresIn *1000
            );

            const user = new Users(email , userId ,token , expirationDate );
            // console.log(user)
            this.user.next(user);

            localStorage.setItem('userData', JSON.stringify(user));
    }
}