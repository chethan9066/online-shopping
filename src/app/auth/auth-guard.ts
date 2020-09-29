import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationService } from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
    constructor(private authService:AuthenticationService,private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | 
    Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        
       return this.authService.user.pipe(
           map(
            user => {
                const isAuth =  !!user; 
                if(isAuth){
                    return true;
                } else {
                return this.router.createUrlTree(['/auth']);
                }
            }
           ) 
        )
    }
}