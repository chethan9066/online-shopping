import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe:Recipe;
  recipe:Recipe;
  id:number;

  constructor(private shoppingListService:ShoppingListService, 
    private route: ActivatedRoute,
    private recipesService : RecipesService) { }

  ngOnInit(): void {
      this.route.params.subscribe(
        (params:Params)=>{
          this.id = +params['id'];
          this.recipe = this.recipesService.getRecipe(this.id);
        }
      )
  }

  addToShoppingList(){
    this.shoppingListService.addIngredientsFrmSL(this.recipe.ingredients)
  }

  onDelete(){
    this.recipesService.deleteRecipe(this.id);
  }
}
