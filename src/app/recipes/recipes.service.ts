import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.module';
import { Ingredients } from '../shared/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipe:Recipe[]=[ 
    new Recipe(
      'Chicken Enchiladas II',
      'A great way to use leftover chicken. Even kids love these!',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F663423.jpg&w=596&h=399&c=sc&poi=face&q=85',
      [
        new Ingredients('Chicken',150),
        new Ingredients('Cheese',20),
        new Ingredients('Onion', 25),
        new Ingredients('Milk',10)
      ]),
  
      new Recipe(
        'Italian Chicken Marinade',
        'This is a simple but delicious way of marinating your chicken.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F665982.jpg&w=596&h=399&c=sc&poi=face&q=85',
      [
        new Ingredients('Chicken',150),
        new Ingredients('Spices',80)
      ])
    ]
  
  constructor() { }

  getRecipes(){
   return this.recipe.slice(); //sends copy of an array not giving access to original array
  }
}
