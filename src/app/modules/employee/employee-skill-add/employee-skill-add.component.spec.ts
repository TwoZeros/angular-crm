import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillAddComponent } from './employee-skill-add.component';

describe('SkillsAddComponent', () => {
  let component: EmployeeSkillAddComponent;
  let fixture: ComponentFixture<EmployeeSkillAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSkillAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSkillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
