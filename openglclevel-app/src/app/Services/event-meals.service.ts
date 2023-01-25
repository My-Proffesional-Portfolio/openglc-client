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

    return this.httpClient.get(environment.apiURL + "MealEvents/userEventMetrics",options
    // options
    // {headers: new HttpHeaders({'Authorization': 'Bearer '+ this.authService.getUserData().token})} 
    );
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
}
