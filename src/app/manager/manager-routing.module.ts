import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerGridComponent} from "./manager-grid/manager-grid.component";

const routes: Routes = [

  {
    path: "Grid",
    component: ManagerGridComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
