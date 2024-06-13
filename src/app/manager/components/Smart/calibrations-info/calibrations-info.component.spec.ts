import { ComponentFixture, TestBed } from '@angular/core/testing';
// @ts-ignore
import { CalibrationsInfoComponent } from './calibrations-info.component';

describe('CalibrationsInfoComponent', () => {
  let component: CalibrationsInfoComponent;
  let fixture: ComponentFixture<CalibrationsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrationsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
