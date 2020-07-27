import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipeIs:Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  displayRecipeDeatils(recipe){
    
  }

}
