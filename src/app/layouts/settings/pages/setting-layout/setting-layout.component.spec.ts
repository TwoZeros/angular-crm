import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingLayoutComponent } from './setting-layout.component';

describe('SettingLayoutComponent', () => {
  let component: SettingLayoutComponent;
  let fixture: ComponentFixture<SettingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
