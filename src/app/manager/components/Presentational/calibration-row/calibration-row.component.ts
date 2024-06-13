import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Calibrations} from "../../../models/Calibrations";

@Component({
  selector: 'app-calibration-row',
  templateUrl: './calibration-row.component.html',
  styleUrls: ['./calibration-row.component.scss']
})
export class CalibrationRowComponent {

  @Input() item!: Calibrations;
  @Input() isSelected: boolean = false;
  @Output() rowClicked = new EventEmitter<Calibrations>();

  onRowClicked() {
    this.rowClicked.emit(this.item);
  }
}
