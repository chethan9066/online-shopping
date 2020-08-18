import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredients } from '../shared/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

 ingredientAdded = new Subject<Ingredients[]>();
 private ingredients:Ingredients[]=[
    new Ingredients('Apple',8),
    new Ingredients('Tamoats',6)
]

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ing:Ingredients){
    this.ingredients.push(ing);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredientsFrmSL(ing:Ingredients[]){ //from Recipe to shopping List 
      
      this.ingredients.push(...ing); //... it's and spread operator convert into list and push to array
      this.ingredientAdded.next(this.ingredients.slice());
  }
}
