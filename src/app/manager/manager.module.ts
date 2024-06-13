import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import {UserService} from "../admin/services/userService/user.service";
import { ManagerGridComponent } from './manager-grid/manager-grid.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {SearchBarModule} from "../shared/components/search-bar/search-bar.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropDrownModule} from "../shared/components/drop-drown/drop-drown.module";
import {UserSettingsModule} from "../shared/components/user-settings/user-settings.module";
import { CalibrationRowComponent } from './components/Presentational/calibration-row/calibration-row.component';

import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {CalibrationService} from "./services/calibrationService/calibration.service";
import { InstrumentsComponent } from './components/Presentational/instruments/instruments.component';
import { MeasurementsComponent } from './components/Presentational/measurements/measurements.component';
import { UserDropdownComponent } from './components/Presentational/user-dropdown/user-dropdown.component';
import { CalibrationRowsComponent } from './components/Smart/calibration-rows/calibration-rows.component';
import { CalibrationsInfoComponent } from './components/Smart/calibrations-info/calibrations-info.component';



@NgModule({
  declarations: [
    ManagerGridComponent,
    CalibrationRowComponent,
    CalibrationRowsComponent,
    CalibrationsInfoComponent,
    MeasurementsComponent,
    InstrumentsComponent,
    UserDropdownComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatTooltipModule,
    SearchBarModule,
    FormsModule,
    DropDrownModule,
    UserSettingsModule,
    NgOptimizedImage,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
    CalibrationService,
    UserService,
  ]
})
export class ManagerModule { }
