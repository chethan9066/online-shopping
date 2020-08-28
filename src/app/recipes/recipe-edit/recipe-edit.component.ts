import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.module';
import { Ingredients } from 'src/app/shared/ingredient.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit , OnDestroy{

  id:number;
  editMode:boolean = false;
  recipeForm:FormGroup;
  newRecipe:Recipe;
  subscription:Subscription;

  constructor(private route:ActivatedRoute, private recipesService:RecipesService , private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:Params) => {
        this.id = + params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

   this.subscription = this.recipesService.recipeChanged.subscribe(
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
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath,Validators.required),
      'description': new FormControl(description,Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
    if(this.editMode){
      this.recipesService.updateRecipe(this.id,this.recipeForm.value);
    }else {
      this.recipesService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  get ingControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onRemove(i:number){
   
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onAddIng(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null, Validators.required)
      })
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
