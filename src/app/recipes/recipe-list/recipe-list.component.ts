import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  recipe:Recipe[]=[new Recipe('Recipe name','descrption of recipe','https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4BqodXSHHE-j78vyZ0iwRUmY_nuzprQ_mxVCWqrJBTJk3A.jpeg'),
  new Recipe('Recipe name','descrption of recipe 2','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg')]
   
  ngOnInit(): void {
  }

  collectRecipeDetails(details:Recipe){
    this.selectedRecipe.emit(details);
  }

}
