import { Component, Input } from '@angular/core';
import { Instruments } from '../../../models/Instruments'; // Adjust path as per your project structure

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent {

  @Input() item!: Instruments;

}
