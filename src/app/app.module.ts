import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthPageComponent } from './auth/auth-page.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { SharedModule } from  './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    AuthPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
    
  ],
  providers: [ { 
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
