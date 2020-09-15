import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthPageComponent } from './auth/auth-page.component';


const routes: Routes = [
  { path:'', redirectTo:'/recipe' , pathMatch:'full' },
  { path:'recipe' , loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesModule)},
  { path:'shopping-list' , loadChildren: () => import('./shopping-list/shopping.module').then( m => m.ShoppingModule)},
  { path: 'auth' , component:AuthPageComponent },
  { path:'not-found', component:ErrorPageComponent , data:{msg:'Page Not Found!'}},
  { path:'**' , redirectTo:'/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
