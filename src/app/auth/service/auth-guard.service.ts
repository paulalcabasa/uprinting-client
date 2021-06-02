import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(): boolean | Observable<boolean>
    {
        if (this.authService.isLoggedIn()) {
            return of(true);
        } else {
            this.router.navigate(['']);
            return of(false);
        }
    }

}
