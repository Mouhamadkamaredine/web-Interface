import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../../../auth/services/authService/auth.service";
import {CookieService} from "ngx-cookie-service";
import {TokenService} from "../../../auth/services/token/token.service";
import {RefreshRequest} from "../../../auth/models/RefreshRequest";

@Injectable({
  providedIn: 'root'
})
export class CustomLoginGuard {

  constructor(private authService: AuthService, private cookieService: CookieService, private tokenService: TokenService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    console.log('Login guard activated')

    if(!this.tokenService.tokensExist(this.cookieService.get('accessToken'), this.cookieService.get('refreshToken'))) {
      return true;
    }

    if (this.tokenService.isExpired(this.cookieService.get('refreshToken'))) {
      this.authService.logout();
      return true;
    }

/*    if (!this.tokenService.isExpired(this.cookieService.get('accessToken'))) {
      this.router.navigate(["/Admin/Grid"]);
      return false;
    }*/

    let tokens: RefreshRequest = {
      accessToken: this.cookieService.get('accessToken'),
      refreshToken: this.cookieService.get('refreshToken')
    }

    this.tokenService.refreshTokens(tokens).subscribe({
      next: (tokenResponse) => {
        if(tokenResponse.accessToken && tokenResponse.refreshToken) {
          this.cookieService.set('accessToken', tokenResponse.accessToken);
          this.cookieService.set('refreshToken', tokenResponse.refreshToken);
        } else {
          throw new Error('Access token or refresh token not found');
        }
        this.router.navigate(["/Admin/Grid"]);
      },
      error: (value) => {
        console.error('Refresh token failed', value);
        this.authService.logout();
      }
    });

    return false;

  }


}

export const LoginGuard: CanActivateFn = (

  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean => {

  return inject(CustomLoginGuard).canActivate(next, state);

}
