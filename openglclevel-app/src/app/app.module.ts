import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { NewRegisterComponent } from './Pages/new-register/new-register.component';
import { AccountComponent } from './Services/account/account.component';
import { MealEventsComponent } from './Services/meal-events/meal-events.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewRegisterComponent,
    AccountComponent,
    MealEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
