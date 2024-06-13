import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, first, Subject, takeUntil, tap} from "rxjs";
import {LoginRequest} from "../../models/LoginRequest";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {User} from "../../../shared/models/user";
import {Router} from "@angular/router";
import {LoginResponse} from "../../models/LoginResponse";
import {CookieService} from "ngx-cookie-service";
import {RefreshRequest} from "../../models/RefreshRequest";
import {TokenResponse} from "../../models/TokenResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject: BehaviorSubject<User | null>;
  private unsubscribeAll: Subject<void> = new Subject<void>();

  public get userValue() {
    return this.userSubject.value;
  }

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {

    const userData = localStorage.getItem('user');
    this.userSubject = new BehaviorSubject(userData ? JSON.parse(userData) : null);

  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  login (loginRequest: LoginRequest) {

    return this.http.post<LoginResponse>(`${environment.authUrl}Login`, loginRequest)

  }

  onLoginSuccess(loginResponse: LoginResponse) {

    const user: User = {
      id: loginResponse.id,
      name: loginResponse.name,
      email: loginResponse.email,
      isDeleted: loginResponse.isDeleted,
      permissionsId: loginResponse.permissionsId,
      permissionsRank: "",
    };

    if (loginResponse.accessToken && loginResponse.refreshToken && loginResponse.permissionsRank) {
      this.cookieService.set('accessToken', loginResponse.accessToken);
      this.cookieService.set('refreshToken', loginResponse.refreshToken);
      this.cookieService.set('userRole', loginResponse.permissionsRank);
    } else {
      throw new Error('Access token or refresh token not found');
    }

    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);

    switch (loginResponse.permissionsRank) {
      case "Admin":
        this.router.navigate(['/Admin/Grid']);
        break;
      case "Manager":
        console.log("I AM HERE")
        this.router.navigate(['/Manager/Grid']);
        break;
    }

  }

  logoutParameters() {
    this.cookieService.deleteAll();
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  logout() {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.cookieService.get('accessToken')}`,
      'Content-Type': 'application/json'
    });

    this.http.put<HttpResponse<any>>(`${environment.authUrl}Logout`, null, {headers})
      .pipe(
        tap( () => {
          console.log('Logout attempt');
        }),
        takeUntil(this.unsubscribeAll) // Add takeUntil operator
      )
      .subscribe({
        next: () => {
          console.log("Logged out successfully!");
          // Remove user completely from local storage and cookies
          this.logoutParameters();
          this.router.navigate(["/Auth/Login"]);
        },
        error: (value) => {
          console.error('Error on logout', value);
          this.logoutParameters();
          this.router.navigate(["/Auth/Login"]);
        }
      });

  }

}
