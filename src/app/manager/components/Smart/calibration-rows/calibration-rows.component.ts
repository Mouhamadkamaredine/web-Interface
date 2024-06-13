import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Calibrations} from "../../../models/Calibrations";

@Component({
  selector: 'app-calibration-rows',
  templateUrl: './calibration-rows.component.html',
  styleUrls: ['./calibration-rows.component.scss']
})
export class CalibrationRowsComponent {

  @Input() items?: Calibrations[] = [];
  @Output() rowClicked = new EventEmitter<Calibrations>();

  onRowClicked(event: Calibrations) {
    this.rowClicked.emit(event);
  }
}
