import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSkillsUpdateComponent } from './group-skill-update.component';

describe('GroupSkillsUpdateComponent', () => {
  let component: GroupSkillsUpdateComponent;
  let fixture: ComponentFixture<GroupSkillsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSkillsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSkillsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
