import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminGridComponent} from "./pages/admin-grid/admin-grid.component";

const routes: Routes = [

  {
    path: "Grid",
    component: AdminGridComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
