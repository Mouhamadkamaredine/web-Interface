import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {enRole} from "./admin/components/Presentational/user-row/roles";
import {AuthGuard} from "./shared/services/authGuard/auth.guard";

const routes: Routes = [

  {
    path:"Auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule), //do not load module
  },
  {
    path:"Admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule), //do not load module
    canActivate: [AuthGuard],
    data: { roles: [enRole.Admin] }
  },
  {
    path:"Manager",
    loadChildren: () => import("./manager/manager.module").then(m => m.ManagerModule), //do not load module
    canActivate: [AuthGuard],
    data: { roles: [enRole.Manager] }
  },
  {
    path: "**",
    redirectTo: "Auth/LogIn" //redirecting to LogIn Page
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
