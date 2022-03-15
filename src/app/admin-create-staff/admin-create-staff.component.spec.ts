import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateStaffComponent } from './admin-create-staff.component';

describe('AdminCreateStaffComponent', () => {
  let component: AdminCreateStaffComponent;
  let fixture: ComponentFixture<AdminCreateStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
