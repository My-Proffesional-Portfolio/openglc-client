import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';
import { NewMealEventModel } from '../Models/MealEvent/NewMealEvent';


@Injectable({
  providedIn: 'root'
})
export class EventMealsService {

  constructor(private httpClient: HttpClient,  private authService: AccountService) { }

  // options : {withCredentials: true,
  
  // };
  getUserMetrics(){

    const options = {withCredentials: true, headers: new HttpHeaders({'Authorization': 'Bearer '+ this.authService.getUserData().token})};

    return this.httpClient.get(environment.apiURL + "MealEvents/userEventMetrics",options );
  }

  getMealEventTypes(){
    const options = {withCredentials: true, headers: new HttpHeaders({'Authorization': 'Bearer '+ this.authService.getUserData().token})};

    return this.httpClient.get(environment.apiURL + "MealEvents/getEventMealTypes", options
    );
  }

  addMealEvent(newMealEvent: NewMealEventModel){

    const options = {withCredentials: true, headers: new HttpHeaders({'Authorization': 'Bearer '+ this.authService.getUserData().token})};

    return this.httpClient.post(environment.apiURL + "MealEvents", newMealEvent, options);
  }
  
  getMealItems(page: number, itemsPerPage: number, searchTerm: string){
    const options = {withCredentials: true, headers: new HttpHeaders({'Authorization': 'Bearer '+ this.authService.getUserData().token})};
    
    return this.httpClient.get(environment.apiURL + "MealItems?page=" + page + "&itemsPerPage=" + 1000, options
    );
  }

  getMealEvents(page: number, itemsPerPage: number, searchTerm: string){

    const options = {withCredentials: true, headers: new HttpHeaders({'Authorization': 'Bearer '+ this.authService.getUserData().token})};
    
    return this.httpClient.get(environment.apiURL + "MealEvents?page=" + page + "&itemsPerPage=" + itemsPerPage + "&searchTerm=" + searchTerm, options
    );
  }

  getMealEventDetails(eventID: string){

    const options = {withCredentials: true, headers: new HttpHeaders({'Authorization': 'Bearer '+ this.authService.getUserData().token})};
    
    return this.httpClient.get(environment.apiURL + "MealEvents/id?eventId=" + eventID, options);
  }

  deleteEvent(eventID: string, specialToken : string)
  {
    debugger;
    const options = {withCredentials: true, headers: new HttpHeaders({'Authorization': 'Bearer ' + specialToken})};
    return this.httpClient.delete(environment.apiURL + "MealEvents/id?eventId=" + eventID, options);
  }
}
