import {Component, Input} from '@angular/core';
import {Measurements} from "../../../models/Measurements";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {

  @Input() item!: Measurements;

}
