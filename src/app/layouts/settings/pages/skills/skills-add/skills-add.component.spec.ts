import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAddComponent } from './skills-add.component';

describe('SkillsAddComponent', () => {
  let component: SkillsAddComponent;
  let fixture: ComponentFixture<SkillsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
