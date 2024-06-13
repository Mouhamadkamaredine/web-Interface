import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenService} from "./auth/services/token/token.service";
import {JWT_OPTIONS, JwtHelperService, JwtModule} from "@auth0/angular-jwt";
import {AuthService} from "./auth/services/authService/auth.service";
import {CookieService} from "ngx-cookie-service";
import {CustomAuthGuard} from "./shared/services/authGuard/auth.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {TokenInterceptorService} from "./shared/services/tokenInterceptor/token-interceptor.service";
import {ErrorInterceptor} from "./shared/services/errorInterceptor/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    JwtHelperService, TokenService, CookieService, AuthService, CustomAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
