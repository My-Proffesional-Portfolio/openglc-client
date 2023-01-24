import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  login(userName : string, password: string) {

    return this.httpClient.get(environment.apiURL + "Account/login?userName=" + userName + "&password=" +password, {withCredentials: true})
  }

  token : string = "";

  isUserLogged() :boolean{
    return false;
  }

  getUserData = () => {
    let data = localStorage.getItem("userData");
    if (data !== null)
      return JSON.parse(data);
    else 
      return false;
  }

  isNullToken(): boolean{
    return this.token === "";
  }

}
