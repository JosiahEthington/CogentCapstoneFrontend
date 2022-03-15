import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCustomerEnableComponent } from './staff-customer-enable.component';

describe('StaffCustomerEnableComponent', () => {
  let component: StaffCustomerEnableComponent;
  let fixture: ComponentFixture<StaffCustomerEnableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffCustomerEnableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCustomerEnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
