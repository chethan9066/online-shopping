import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.module';
import { Ingredients } from 'src/app/shared/ingredient.module';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode:boolean = false;
  recipeForm:FormGroup;
  newRecipe:Recipe;
  constructor(private route:ActivatedRoute, private recipesService:RecipesService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:Params) => {
        this.id = + params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

    this.recipesService.recipeChanges.subscribe(
      (recipe:Recipe[]) =>{
        this.initForm();
      }
    )

  }

  private initForm(){
    let recipeName;
    let imagePath;
    let description;
    let recipeIngredients = new FormArray([]);
    
    if(this.editMode){
     const recipe = this.recipesService.getRecipe(this.id);
     recipeName = recipe.name;
     imagePath = recipe.imagePath;
     description = recipe.description;

     if(recipe['ingredients']){
      for (let ingredient of recipe.ingredients){
        recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          })
        )
      }
     }
    }

    this.recipeForm = new FormGroup({
      'recipeName': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath,Validators.required),
      'description': new FormControl(description,Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
    // console.log(this.recipeForm.get('description').value)
    // if(this.editMode){
    //   this.newRecipe.name = this.recipeForm.get('recipeName').value;
    //   this.newRecipe.imagePath = this.recipeForm.get('imagePath').value;
    //   this.newRecipe.description = this.recipeForm.get('description').value;
    //   this.recipesService.updateRecipe(this.id,this.newRecipe);
    // }
  }

  get ingControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onRemove(i:number){
    this.recipesService.RemoveIngredient(this.id,i);
  }

  onAddIng(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null, Validators.required)
      })
    )
  }

}
