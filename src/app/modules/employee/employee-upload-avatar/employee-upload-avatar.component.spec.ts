import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUploadAvatarComponent } from './employee-upload-avatar.component';

describe('EmployeeUploadAvatarComponent', () => {
  let component: EmployeeUploadAvatarComponent;
  let fixture: ComponentFixture<EmployeeUploadAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeUploadAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUploadAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
