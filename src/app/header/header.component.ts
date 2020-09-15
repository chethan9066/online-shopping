import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service'
import { AuthenticationService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  // @Output() featureSelected = new EventEmitter<string>();
  isAuthenticated:boolean = false;
  userSub:Subscription;

  constructor(private dataStorageService:DataStorageService, private authService:AuthenticationService ) { }

  ngOnInit(): void {
      this.userSub = this.authService.user.subscribe(
        user => {
          this.isAuthenticated = !!user;
          // console.log(this.isAuthenticated)
          // console.log(!user);
          // console.log(!!user);
        }
      );

  }

  // onSelect(feature:string){
  //   this.featureSelected.emit(feature);
  // }

  onSaveData(){
    this.dataStorageService.saveData().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onFetchData(){
     this.dataStorageService.FetchData().subscribe();
  }

  onLagout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
