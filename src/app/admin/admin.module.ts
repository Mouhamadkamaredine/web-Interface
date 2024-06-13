import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserRowComponent } from './components/Presentational/user-row/user-row.component';
import { AdminGridComponent } from './pages/admin-grid/admin-grid.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserRowsComponent } from './components/Smart/user-rows/user-rows.component';
import {DropDrownModule} from "../shared/components/drop-drown/drop-drown.module";
import {SearchBarModule} from "../shared/components/search-bar/search-bar.module";
import {ClickOutsideDirective} from "../shared/directives/click-outside.directive";
import {UserService} from "./services/userService/user.service";
import {MatDialogModule} from "@angular/material/dialog";
import {EditUserModal} from "./components/Presentational/edit-user-modal/edit-user-modal";
import { AddUserModalComponent } from './components/Smart/add-user-modal/add-user-modal.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {UserSettingsModule} from "../shared/components/user-settings/user-settings.module";

@NgModule({
  declarations: [
    UserRowComponent,
    AdminGridComponent,
    UserRowsComponent,
    EditUserModal,
    AddUserModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    DropDrownModule,
    SearchBarModule,
    NgOptimizedImage,
    MatDialogModule,
    ReactiveFormsModule,
    MatTooltipModule,
    UserSettingsModule
  ],
  providers: [
    UserService,
  ]
})
export class AdminModule { }
