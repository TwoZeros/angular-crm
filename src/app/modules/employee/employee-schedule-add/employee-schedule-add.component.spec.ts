import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeScheduleAddComponent } from './employee-schedule-add.component';

describe('EmployeeScheduleAddComponent', () => {
  let component: EmployeeScheduleAddComponent;
  let fixture: ComponentFixture<EmployeeScheduleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeScheduleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
