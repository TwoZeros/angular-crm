import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSkillAddComponent } from './group-skill-add.component';

describe('SkillsAddComponent', () => {
  let component: GroupSkillAddComponent;
  let fixture: ComponentFixture<GroupSkillAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSkillAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSkillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
