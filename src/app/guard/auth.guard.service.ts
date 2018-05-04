import { Observable } from 'rxjs/Observable';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    ActivatedRoute,
    CanActivateChild
} from '@angular/router';

import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) { }
    // provide auth guards to root routes and all child routes
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthentivcate()
            .then(
                (authentication: boolean) => {
                    if (authentication) {
                        return true;
                    } else {
                        return false;
                    }
                });
    }

    // Guards all child routes
    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}
