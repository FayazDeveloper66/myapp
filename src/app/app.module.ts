import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MoviealbumsComponent } from './moviealbums/moviealbums.component';
import { FavoritealbumsComponent } from './favoritealbums/favoritealbums.component';
const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'moviealbums', component: MoviealbumsComponent },
  { path: 'favoritealbums', component: FavoritealbumsComponent }
  
]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MoviealbumsComponent,
    FavoritealbumsComponent
  ],
  
  imports: [
    BrowserModule, BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule,AppRoutingModule,
   
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
