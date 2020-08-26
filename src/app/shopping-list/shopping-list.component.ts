import { Component, OnInit } from '@angular/core';

import { Ingredients } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[];
  // ingredients:Ingredients[]=[
  //     new Ingredients('Apple',8),
  //     new Ingredients('Tamoats',6)
  // ]

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded
    .subscribe(
      (ing: Ingredients[]) =>{
        this.ingredients=ing;
      }
    )
  }

  onEdit(i:number){
    this.shoppingListService.editMode.next(i);
  }

  // onIngredientAdded(ing:Ingredients){
  //   // this.ingredients.push(ing);

  // }
}
