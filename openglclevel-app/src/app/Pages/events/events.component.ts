import { Component, OnInit } from '@angular/core';
import { MealEventDedtailsModel } from 'src/app/Models/MealEvent/MealEventDetailsModel';
import { MealEventModel } from 'src/app/Models/MealEvent/MealEventModel';
import { PaginationListEntityModel } from 'src/app/Models/PaginationListEntityModel';
import { EventMealsService } from 'src/app/Services/event-meals.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  pagedData : PaginationListEntityModel<MealEventModel> = <PaginationListEntityModel<MealEventModel>>{}
  selectedMealEvent: MealEventModel = <MealEventModel>{};

  currentEventShow: MealEventDedtailsModel = <MealEventDedtailsModel>{}

  constructor(private eventMealService: EventMealsService) { }

  ngOnInit(): void {
    this.eventMealService.getMealEvents(0, 1000, "").subscribe({
      next: (data: any) => {
        debugger;
        this.pagedData= data;
        this.selectedMealEvent = this.pagedData.pagedList[0];
        this.getDataFromSelectedEventID();
      },
      error: (err) => {
        debugger;
        alert("Ha ocurrido un error -->" + err.error.errorMessages[0]);
        },
      });
  }

  getDataFromSelectedEventID(){
    // alert(this.selectedMealEvent.id);
    this.eventMealService.getMealEventDetails(this.selectedMealEvent.id).subscribe({
      next: (data: any) => {
        debugger;
        this.currentEventShow = data;
      },
      error: (err) => {
        debugger;
        alert("Ha ocurrido un error -->" + err.error.errorMessages[0]);
        },
      });

  }

}
