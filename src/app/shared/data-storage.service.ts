import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.module';
import { AuthenticationService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor( private http:HttpClient , private recipeService: RecipesService , private authService:AuthenticationService) { }

  saveData(){
    const recipe = this.recipeService.getRecipes();
    return this.http.put('https://shopping-project-cfaea.firebaseio.com/recipes.json',recipe);
  }

  FetchData(){
    //My Aproach
    // let token:string;
    // this.authService.user.subscribe( user =>{
    //     token = user.token;
    // });

          return this.http.get<Recipe[]>('https://shopping-project-cfaea.firebaseio.com/recipes.json').pipe(
            map(recipes => {
              return recipes.map(recipe => {
                return {
                  ...recipe,
                  ingredients: recipe.ingredients ? recipe.ingredients : []
                };
              });
            }),
            tap(
              (recipes) => {
                this.recipeService.setRecipes(recipes);
              }
            )
          )
      
  }
}
