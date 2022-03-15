import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAdjustAccountComponent } from './staff-adjust-account.component';

describe('StaffAdjustAccountComponent', () => {
  let component: StaffAdjustAccountComponent;
  let fixture: ComponentFixture<StaffAdjustAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAdjustAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAdjustAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
