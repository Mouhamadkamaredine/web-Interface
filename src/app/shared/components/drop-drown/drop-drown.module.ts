import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoleDropDownComponent} from "./role-drop-drown/role-dropDown.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RoleDropDownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RoleDropDownComponent
  ]
})
export class DropDrownModule { }
