import { Component, OnInit } from '@angular/core';

import { Ingredients } from '../shared/ingredient.module'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[]=[
      new Ingredients('Apple',8),
      new Ingredients('Tamoats',6)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ing:Ingredients){
    this.ingredients.push(ing);
  }
}
