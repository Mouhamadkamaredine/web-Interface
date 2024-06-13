import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserOptionsComponent} from "./user-options/user-options.component";
import {ClickOutsideDirective} from "../../directives/click-outside.directive";



@NgModule({
  declarations: [
    UserOptionsComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideDirective
  ],
  exports: [
    UserOptionsComponent
  ]
})
export class UserSettingsModule { }
