import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'shopping-project';
  loadedFeature='recipe'

  constructor(private authService:AuthenticationService){}
  // onNavigate(feature:string){
  //   this.loadedFeature=feature;
  // }

  ngOnInit(){
    this.authService.autoLogin();
  }
}
