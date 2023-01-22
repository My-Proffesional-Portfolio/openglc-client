import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  token : string = "";

  isUserLogged() :boolean{
    return false;
  }

  isNullToken(): boolean{
    return this.token === "";
  }

}
