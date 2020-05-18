import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStartPageComponent } from './setting-start-page.component';

describe('SettingStartPageComponent', () => {
  let component: SettingStartPageComponent;
  let fixture: ComponentFixture<SettingStartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingStartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
