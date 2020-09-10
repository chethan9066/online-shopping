import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.module';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor( private http:HttpClient , private recipeService: RecipesService ) { }

  saveData(){
    const recipe = this.recipeService.getRecipes();
    return this.http.put('https://shopping-project-cfaea.firebaseio.com/recipes.json',recipe);
  }

  FetchData(){
    return this.http.get<Recipe[]>('https://shopping-project-cfaea.firebaseio.com/recipes.json')
    .subscribe(
      (recipes) =>{
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
