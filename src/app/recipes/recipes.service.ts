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
      1,
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
        2,
        'Italian Chicken Marinade',
        'This is a simple but delicious way of marinating your chicken.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F665982.jpg&w=596&h=399&c=sc&poi=face&q=85',
      [
        new Ingredients('Chicken',150),
        new Ingredients('Spices',80)
      ]),

      new Recipe(
        3,
        'Chicken Cacciatore ',
        'We chose this recipe as our inaugural Winner Winner Chicken Dinner feature,to get fall off to a cozy start',
        'https://images.food52.com/QBMv_HwDcc4nQ7PB5ydRhGUrPS8=/2016x1344/729016a7-afcd-49cb-a499-be9f31d6d3c0--Chicken-Cacciatore_0735_food52_mark_weinberg.jpg',
        [
          new Ingredients('skin-on chicken thighs',200 ),
          new Ingredients('bacon',350 ),
          new Ingredients('tomato', 20 ),
          new Ingredients('onion', 40 ),
          new Ingredients(' oregano leaves',50 )

        ]
      )
    ]
  
  constructor() { }

  getRecipes(){
   return this.recipe.slice(); //sends copy of an array not giving access to original array
  }
}
