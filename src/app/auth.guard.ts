import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router , CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   canActivate(route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return !!localStorage.user;
  }
}
