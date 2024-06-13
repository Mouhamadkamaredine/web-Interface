import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationRowComponent } from './calibration-row.component';

describe('CalibrationRowComponent', () => {
  let component: CalibrationRowComponent;
  let fixture: ComponentFixture<CalibrationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
