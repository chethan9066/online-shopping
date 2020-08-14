import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.module';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  // @Output() recipeDetail = new EventEmitter<any>();

  constructor(private recipesService:RecipesService) { }

  ngOnInit(): void {
  }

  // fireRecipeDetails(){
  //   this.recipesService.selectedRecipe.emit(this.recipe);
  //   // console.log(this.recipe);
  // }

}
