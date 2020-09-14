import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipesStartPageComponent } from './recipes/recipes-start-page/recipes-start-page.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service'
import { AuthPageComponent } from './auth/auth-page.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  { path:'', redirectTo:'/recipe' , pathMatch:'full' },
  { path:'recipe', component:RecipesComponent , canActivate:[AuthGuard],
  children:[
    { path:'' , component:RecipesStartPageComponent},
    { path:'new' , component: RecipeEditComponent},
    { path:':id' , component:RecipeDetailComponent , resolve:[RecipeResolverService] },
    { path:':id/edit' , component: RecipeEditComponent , resolve:[RecipeResolverService]}

  ]},
  { path:'shopping-list', component:ShoppingListComponent },
  { path: 'auth' , component:AuthPageComponent },
  { path:'not-found', component:ErrorPageComponent , data:{msg:'Page Not Found!'}},
  { path:'**' , redirectTo:'/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
