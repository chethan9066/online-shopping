import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Output() recipeDetail = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  fireRecipeDetails(){
    this.recipeDetail.emit();
  }

}
