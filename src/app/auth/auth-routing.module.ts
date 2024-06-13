import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "../shared/services/loginGuard/login.guard";

const routes: Routes = [

  {
    path: "LogIn",
    component: LoginComponent,
    canActivate: [LoginGuard],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
