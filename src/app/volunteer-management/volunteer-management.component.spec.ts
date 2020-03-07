import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerManagementComponent } from './volunteer-management.component';

describe('VolunteerManagementComponent', () => {
  let component: VolunteerManagementComponent;
  let fixture: ComponentFixture<VolunteerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
