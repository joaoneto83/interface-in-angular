import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/_core/services/token.service';


@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private tokenService: TokenService,
        private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

            let roles:string[] = this.router.url['roles'];

            if(!this.tokenService.isLogged()){
                this.router.navigate(['/login']);
                return false;
            }
            return true;
    }
}