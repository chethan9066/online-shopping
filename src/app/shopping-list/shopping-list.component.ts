import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ingredients } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Observable<{ingredients:Ingredients[]}> ;
  // ingredients:Ingredients[]=[
  //     new Ingredients('Apple',8),
  //     new Ingredients('Tamoats',6)
  // ]

  constructor(private shoppingListService: ShoppingListService , private store:Store<{shoppingList:{ingredients:Ingredients[]}}>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.shoppingListService.ingredientAdded
    // .subscribe(
    //   (ing: Ingredients[]) =>{
    //     this.ingredients=ing;
    //   }
    // )
  }

  onEdit(i:number){
    this.shoppingListService.editMode.next(i);
  }

  // onIngredientAdded(ing:Ingredients){
  //   // this.ingredients.push(ing);

  // }
}
