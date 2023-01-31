import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewRegisterModel } from '../Models/Accounts/NewRegisterModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  login(userName : string, password: string, generateDeleteToken : boolean = false) {

    var requestQry = "Account/login?userName=" + userName + "&password=" +password;
    if (generateDeleteToken === true)
    {
      requestQry+= "&tokenForDeleteAction=true"
    }
    // tokenForDeleteAction=false
    return this.httpClient.get(environment.apiURL + requestQry, {withCredentials: true})
  }

  register(newUser: NewRegisterModel) {

    return this.httpClient.post(environment.apiURL + "Account/register", newUser);
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
