import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAccountApprovalComponent } from './staff-account-approval.component';

describe('StaffAccountApprovalComponent', () => {
  let component: StaffAccountApprovalComponent;
  let fixture: ComponentFixture<StaffAccountApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAccountApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAccountApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
