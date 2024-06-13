import { Injectable } from '@angular/core';
import { AuthService } from "../../../auth/services/authService/auth.service";
import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { CookieService } from "ngx-cookie-service";
import { TokenService } from "../../../auth/services/token/token.service";
import { RefreshRequest } from "../../../auth/models/RefreshRequest";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private tokenService: TokenService, private cookieService: CookieService, private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const isApiUrl = request.url.startsWith(environment.authUrl);

    if (this.tokenService.isLoggedIn() && !isApiUrl) {

      console.log('Token interceptor activated');

      if (this.tokenService.isExpired(this.cookieService.get('refreshToken'))) {
        this.authService.logout();
        return next.handle(request);
      }

      if (this.tokenService.isExpired(this.cookieService.get('accessToken'))) {

        let tokens: RefreshRequest = {
          accessToken: this.cookieService.get('accessToken'),
          refreshToken: this.cookieService.get('refreshToken'),
        };

        return this.tokenService.refreshTokens(tokens).pipe(
          switchMap((tokenResponse) => {
            if (tokenResponse.accessToken && tokenResponse.refreshToken) {
              this.cookieService.set('accessToken', tokenResponse.accessToken);
              this.cookieService.set('refreshToken', tokenResponse.refreshToken);
              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${tokenResponse.accessToken}`
                }
              });
              return next.handle(request);
            } else {
              this.authService.logout();
              throw new Error('Access token or refresh token not found');
            }
          }),
          catchError((error) => {
            console.error('Refresh token failed', error);
            this.authService.logout();
            throw new Error(error)
          })
        );
      } else {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.cookieService.get('accessToken')}`
          }
        });
      }
    }

    console.log('Request sent');

    return next.handle(request);
  }
}
