import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { of, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(route, state: RouterStateSnapshot): boolean | Observable<boolean>
    {
        if (this.authService.isLoggedIn()) {
            return of(true);
        } else {
            this.router.navigate(['/customer'], { queryParams: { returnUrl: state.url}});
            return of(false);
        }
    }

}
