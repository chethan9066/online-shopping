import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { AuthenticationService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'shopping-project';
  loadedFeature='recipe'

  constructor(private authService:AuthenticationService , 
    @Inject(PLATFORM_ID) private platformId){}
  // onNavigate(feature:string){
  //   this.loadedFeature=feature;
  // }

  ngOnInit(){

    if(isPlatformBrowser(this.platformId)){
      console.log('browser')
      this.authService.autoLogin();
    }else
      console.log('not in browser')
  }
}
