import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentUpdateComponent } from './department-update.component';

describe('DepartmentUpdateComponent', () => {
  let component: DepartmentUpdateComponent;
  let fixture: ComponentFixture<DepartmentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
