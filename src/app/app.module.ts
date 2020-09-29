import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthPageComponent } from './auth/auth-page.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { SharedModule } from  './shared/shared.module';
import { ShoppingListReducer } from './shopping-list/store/shoppingList.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    AuthPageComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({shoppingList:ShoppingListReducer}),
    SharedModule
    
  ],
  providers: [ { 
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
