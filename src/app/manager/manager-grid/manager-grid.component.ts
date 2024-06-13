import {ChangeDetectorRef, Component} from '@angular/core';
import {AuthService} from "../../auth/services/authService/auth.service";
import {User} from "../../shared/models/user";
import {Calibrations} from "../models/Calibrations";
import {Subject, takeUntil, tap} from "rxjs";
import {CalibrationService} from "../services/calibrationService/calibration.service";
import {Measurements} from "../models/Measurements";
import {Instruments} from "../models/Instruments";
import {UserService} from "../../admin/services/userService/user.service";

@Component({
  selector: 'app-manager-grid',
  templateUrl: './manager-grid.component.html',
  styleUrls: ['./manager-grid.component.scss']
})
export class ManagerGridComponent {

  protected data?: Calibrations[];
  protected calibrationsList?: Calibrations[];
  protected usersList?: User[];
  protected measurementsList?: Measurements[];
  protected instrumentsList?: Instruments[];
  protected moduleSnClicked!: string;
  protected calibrationId!: number;
  protected user: User | null;
  protected calibrationsTitle?: string = "Calibrations";
  protected totalCalibrations?: number;
  protected startDate: Date | undefined;
  protected endDate: Date | undefined;
  protected email!: string;
  protected moduleSn!: string;
  protected isModuleCalibrationsDisplayed: boolean = false;
  protected currentPage: number = 1;
  protected totalPages: number = 1;
  protected currentPageModule: number = 1;
  protected totalPagesModule: number = 1;

  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(private userService: UserService, private authService: AuthService, private calibrationService: CalibrationService, private cdr: ChangeDetectorRef)
  {
    this.user = authService.userValue;
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  getUsers() {

    this.userService.getUsersList()
      .pipe(
        tap(() => {
          console.log('Get all users attempt');
        }),
        takeUntil(this.unsubscribeAll) // Add takeUntil operator
      )
      .subscribe({
        next: (users) => {
          this.usersList = users;
        },
        error: (value) => {
          console.error('Get users failed', value);
        }
      });

  }

  logOut() {
    this.authService.logout();
  }

  onSearchChange(event: string) {
/*    this.usersList = this.data?.filter(user => user.name.toLowerCase().includes(event.toLowerCase()));
    this.usersTitle = "Users (" + this.usersList?.length + ")";*/
  }

  onSearchChangeSn(event: string) {
    this.moduleSn = event;
  }

  SearchBySn() {
    this.getModuleCalibrations(this.moduleSn);
  }

  onSelectionChange(email: string) {
    this.email = email;
    this.getCalibrations(email, this.startDate, this.endDate);
  }

  ClearGrid() {
    this.startDate = undefined;
    this.endDate = undefined;
    this.moduleSn = "";
    this.getCalibrations();
  }

  onDateChange() {
    if((this.startDate !== undefined && this.endDate !== undefined) && (this.startDate !== null && this.endDate !== null) &&
      (this.startDate?.toISOString() !== "" && this.endDate?.toISOString() !== "")) {
      this.getCalibrations(this.email, this.startDate, this.endDate);
    }
  }

  filterCalibrations() {
    //this.calibrationsTitle = "Calibrations";
  }

  ngOnInit() {
    this.getCalibrations();
    this.getUsers();
  }

  onRowClicked(calibration: Calibrations) {
    this.measurementsList = calibration.measurementsHasCalibrations;
    this.instrumentsList = calibration.instruments;
    this.moduleSnClicked = calibration.moduleSn;
    this.calibrationId = calibration.id;
    this.cdr.detectChanges();
  }

  getModuleCalibrations(moduleSn: string, page: number = 1, pageSize: number = 7) {
    this.calibrationService.getModuleCalibrationsList(moduleSn, page, pageSize)
      .pipe(
        tap(() => {
          console.log('Get module calibrations attempt');
        }),
        takeUntil(this.unsubscribeAll)
      )
      .subscribe({
        next: (getCalibrations) => {
          this.data = getCalibrations.calibrations;
          this.calibrationsList = this.data;
          this.totalCalibrations = getCalibrations.totalCount;
          this.calibrationsTitle = "Calibrations (" + this.totalCalibrations + ")";
          this.totalPagesModule = Math.ceil(this.totalCalibrations / pageSize);
          this.currentPageModule = page;
          this.isModuleCalibrationsDisplayed = true;
          console.log(this.calibrationsList)
        },
        error: (value) => {
          console.error('Get module calibrations failed', value);
        }
      });
  }

  getCalibrations(email?: string, startDate?: Date, endDate?: Date, page: number = 1, pageSize: number = 7) {

    let dateRange: string = "";

    if((startDate !== undefined && endDate !== undefined) && (startDate !== null && endDate !== null) && (startDate?.toISOString() !== "" && endDate?.toISOString() !== "")) {
      dateRange = startDate?.toISOString() +"/"+endDate?.toISOString();
    }

    this.calibrationService.getCalibrationsList({
      Email: email ? email : "",
      DateRange: dateRange,
      PageNumber: page,
      PageSize: pageSize
    })
      .pipe(
        tap(() => {
          console.log('Get all calibrations attempt');
        }),
        takeUntil(this.unsubscribeAll)
      )
      .subscribe({
        next: (getCalibrations) => {
          this.data = getCalibrations.calibrations;
          this.calibrationsList = this.data;
          this.totalCalibrations = getCalibrations.totalCount;
          this.calibrationsTitle = "Calibrations (" + this.totalCalibrations + ")";
          this.totalPages = Math.ceil(this.totalCalibrations / pageSize);
          this.currentPage = page;
          this.isModuleCalibrationsDisplayed = false;
        },
        error: (value) => {
          console.error('Get calibrations failed', value);
        }
      });
  }

}
