import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLoginPageComponent } from './staff-login-page.component';

describe('StaffLoginPageComponent', () => {
  let component: StaffLoginPageComponent;
  let fixture: ComponentFixture<StaffLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
