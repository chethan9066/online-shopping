import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList(){
    this.shoppingListService.addIngredientsFrmSL(this.recipe.ingredients)
  }
}
