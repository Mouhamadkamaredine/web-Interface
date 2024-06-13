import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Measurements } from "../../../models/Measurements";
import { Instruments } from "../../../models/Instruments";
import {CalibrationService} from "../../../services/calibrationService/calibration.service";
import {first} from "rxjs";

@Component({
  selector: 'app-calibrations-info',
  templateUrl: './calibrations-info.component.html',
  styleUrls: ['./calibrations-info.component.scss']
})
export class CalibrationsInfoComponent {

  @Input() measurements?: Measurements[] = [];
  @Input() instruments?: Instruments[] = [];
  @Input() moduleSn!: string;
  @Input() calibrationId!: number;
  @Output() files = new EventEmitter<string>();

  measurementsCollapsed: boolean = true;
  instrumentsCollapsed: boolean = true;

  constructor(private calibrationService: CalibrationService) {
  }

  toggleMeasurementsVisibility() {
    this.measurementsCollapsed = !this.measurementsCollapsed;
  }

  toggleInstrumentsVisibility() {
    this.instrumentsCollapsed = !this.instrumentsCollapsed;
  }

  downloadFiles() {
    let name = this.moduleSn + '_' + this.calibrationId;
    this.calibrationService.downloadFiles(name)
      .pipe(
        first()
      )
      .subscribe({
      next: (file) => {
        this.saveFile(file, this.moduleSn, this.calibrationId);
      }
    })
  }

  saveFile(data: Blob, moduleSn: string, calibrationDate: number): void {
    const blob = new Blob([data], { type: 'application/zip' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = `${moduleSn}_${calibrationDate}_files.zip`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

}
