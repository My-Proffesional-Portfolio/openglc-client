import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';


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
}
