import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe= new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

}
