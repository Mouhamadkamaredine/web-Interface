import { Injectable } from '@angular/core';
import {RefreshRequest} from "../../models/RefreshRequest";
import {environment} from "../../../../environments/environment";
import {Observable, Subject, takeUntil, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../authService/auth.service";
import {TokenResponse} from "../../models/TokenResponse";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient, private cookieService: CookieService, private authService: AuthService, private router: Router, private jwtHelper: JwtHelperService) { }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  isLoggedIn() {

    const user = this.authService.userValue;
    return user && this.cookieService.get('accessToken');

  }

  isExpired(token: string) {
    return this.jwtHelper.isTokenExpired(token)
  }

  tokensExist(aToken: string, rToken: string) {

    if (!aToken || !rToken) {
      console.error('Refresh token or access token not found in cookies.');
      return false;
    }

    return true;
  }

  refreshTokens(refreshRequest: RefreshRequest): Observable<TokenResponse> {

    return this.http.post<TokenResponse>(`${environment.authUrl}Refresh`, refreshRequest)
      .pipe(
      tap(() => {
        console.log('Refresh token attempt');
      }),
      takeUntil(this.unsubscribeAll) // Add takeUntil operator
    )
  }

}
