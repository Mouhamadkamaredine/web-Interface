import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGridComponent } from './manager-grid.component';

describe('ManagerGridComponent', () => {
  let component: ManagerGridComponent;
  let fixture: ComponentFixture<ManagerGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
