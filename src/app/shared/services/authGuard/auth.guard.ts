import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../../auth/services/authService/auth.service";
import {CookieService} from "ngx-cookie-service";
import {TokenService} from "../../../auth/services/token/token.service";
import {RefreshRequest} from "../../../auth/models/RefreshRequest";
import { switchMap, catchError } from 'rxjs/operators';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomAuthGuard {

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService, private tokenService: TokenService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {

    const user = this.authService.userValue;
    const roles = next.data?.['roles'] as Array<string>;

    console.log('Auth guard activated')

    if (user && this.cookieService.get('accessToken')) {
      console.log("User is logged in")

      if (this.tokenService.isExpired(this.cookieService.get('refreshToken'))) {
        this.authService.logout();
        this.router.navigate(['/Auth/LogIn'], { queryParams: { returnUrl: state.url } });
        return of(false);
      }

      if (this.tokenService.isExpired(this.cookieService.get('accessToken'))) {

        let tokens: RefreshRequest = {
          accessToken: this.cookieService.get('accessToken'),
          refreshToken: this.cookieService.get('refreshToken'),
        }

        return this.tokenService.refreshTokens(tokens).pipe(
          switchMap((tokenResponse) => {
            if (tokenResponse.accessToken && tokenResponse.refreshToken) {
              this.cookieService.set('accessToken', tokenResponse.accessToken);
              this.cookieService.set('refreshToken', tokenResponse.refreshToken);

              if (roles && !roles.includes(this.cookieService.get('userRole'))) {
                // role not authorized, redirect to home page
                this.router.navigate(['/']);
                return of(false);
              }
              // authorized, return true
              return of(true);
            } else {
              console.error('Access token or refresh token not found');
              this.authService.logout();
              return of(false);
            }
          }),
          catchError(error => {
            console.error('Refresh token failed', error);
            this.authService.logout();
            return of(false);
          })
        );

      }

      if (roles && !roles.includes(this.cookieService.get('userRole'))) {
        // role not authorized, redirect to home page
        return of(false);
      }
      // authorized, return true
      return of(true);
    }

    // not logged in, redirect to login page with the return url
    this.router.navigate(['/Auth/LogIn'], { queryParams: { returnUrl: state.url } });
    return of(false);
  }

}

export const AuthGuard: CanActivateFn = (

  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> => {

  return inject(CustomAuthGuard).canActivate(next, state) as Observable<boolean>;

}
