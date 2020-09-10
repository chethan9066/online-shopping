import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service'
import { Recipe } from '../recipes/recipe.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();
  constructor(private dataStorageService:DataStorageService ) { }

  ngOnInit(): void {
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
}
