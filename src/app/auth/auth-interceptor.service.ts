import {Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService:AuthenticationService, private http:HttpClient) {}

    intercept( req:HttpRequest<any> , next: HttpHandler){
        // console.log("interceptore call");
       return this.authService.user.pipe(take(1) , exhaustMap(
            user => {
                if(!user) {
                    return next.handle(req);
                }

                const modifiedReq = req.clone({
                    params: new HttpParams().set('auth',user.token )
                });
               return next.handle(modifiedReq);
            }
        ))
    }

}