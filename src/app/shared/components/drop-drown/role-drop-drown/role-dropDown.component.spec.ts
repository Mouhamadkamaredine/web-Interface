import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDropDownComponent } from './role-dropDown.component';

describe('DropDrownComponent', () => {
  let component: RoleDropDownComponent;
  let fixture: ComponentFixture<RoleDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
