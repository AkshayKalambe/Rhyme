import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error("Method not implemented.");
  }
 
 constructor(private router: Router){
 
}
 
  CanActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
    return new Promise((resolve, reject) => {
    
       firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {

          this.router.navigate(['/login']);
            
          resolve(false);
        }
       })
      
    })
  }
}  