import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

import { Recipe } from './recipe.module';
import { Ingredients } from '../shared/ingredient.module';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  recipeChanged = new Subject<Recipe[]>();

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
      ]),

      new Recipe(
        'Chicken Cacciatore ',
        'We chose this recipe as our inaugural Winner Winner Chicken Dinner feature,to get fall off to a cozy start',
        'https://i.pinimg.com/originals/bd/23/30/bd2330396251684932441cdad4c3c365.jpg',
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

  getRecipe(index:number){
    return this.recipe[index];
  }

  addRecipe(newRecipe:Recipe){

    this.recipe.push(newRecipe);
    this.recipeChanged.next(this.recipe.slice());

  }

  setRecipes(recipes){
    this.recipe = recipes;
    this.recipeChanged.next(this.recipe.slice());
  }

  updateRecipe(i:number, newRecipe:Recipe){
    // console.log(newRecipe)
    this.recipe[i]= newRecipe;
    this.recipeChanged.next(this.recipe.slice());
  }


  deleteRecipe(i:number){
    this.recipe.splice(i,1);
    this.recipeChanged.next(this.recipe.slice());
  }

}
