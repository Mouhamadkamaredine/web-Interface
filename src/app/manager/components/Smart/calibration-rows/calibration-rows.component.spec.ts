import { ComponentFixture, TestBed } from '@angular/core/testing';
// @ts-ignore
import {CalibrationRowsComponent} from "./calibration-rows.component";


describe('CalibrationRowsComponent', () => {
  let component: CalibrationRowsComponent;
  let fixture: ComponentFixture<CalibrationRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationRowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrationRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
