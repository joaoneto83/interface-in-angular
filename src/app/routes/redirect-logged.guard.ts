import { TokenService } from './../_core/services/token.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectLoggedGuard implements CanActivate {

  /**
   * Construtor guard
   */
  constructor(private serviceToken:TokenService , private route:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const valorLogged = this.serviceToken.hasToken();
    if(valorLogged){
      //console.log('foi')
      this.route.navigate(['inicio']);
    }
    //console.log(valorLogged);
    return !valorLogged; 
  }
  
}
