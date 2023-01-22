import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  links: Array<{ text: string, path: string }> = [];

  constructor(private router: Router, public authService: AccountService){}

  ngOnInit(){

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
}
