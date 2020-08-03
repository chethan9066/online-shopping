import { Injectable, EventEmitter } from '@angular/core';

import { Ingredients } from '../shared/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

 ingredientAdded = new EventEmitter<Ingredients[]>();
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
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
