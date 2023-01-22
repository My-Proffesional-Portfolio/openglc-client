import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

constructor(private accountService: AccountService, private router: Router){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //loggedLogic
    
    if (!this.accountService.isNullToken())
      return true;

      else{
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }

    
  }
  
}
