import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventsComponent } from './Pages/events/events.component';
import { HomeComponent } from './Pages/home/home.component';
import { MealEventComponent } from './Pages/meal-event/meal-event.component';
import { AuthguardGuard } from './security/authguard.guard';
import { AccountService } from './Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openglclevel-app';
  isExpanded = false;
  environmentMessage = "";


  links: Array<{ text: string, path: string }> = [];

  constructor(private router: Router, public authService: AccountService){}

  ngOnInit(){
  if (environment.apiURL === "https://qaopenglc-api.azurewebsites.net/api/" 
  || environment.apiURL === "https://localhost:7295/api/" 
  ||  environment.apiURL === "https://qaopenglclapi.somee.com/service/api/")
      this.environmentMessage ="QA Environment"
    this.router.config.push(
      {path:"", component: HomeComponent, canActivate: [AuthguardGuard]},
      {path:"events", component: EventsComponent, canActivate: [AuthguardGuard]},
      {path:"mealEvent", component: MealEventComponent, canActivate: [AuthguardGuard]},
      )

    this.links.push(
      { text: "Principal", path: "" },
      { text: "Bitácora", path: "events" },
      { text: "Agregar bitácora", path: "mealEvent" },
      );


  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logOut(){
    localStorage.removeItem("userData");
    this.router.navigate(['/login']);
  }
}
