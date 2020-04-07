import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdateAvatarComponent } from './client-update-avatar.component';

describe('ClientUpdateAvatarComponent', () => {
  let component: ClientUpdateAvatarComponent;
  let fixture: ComponentFixture<ClientUpdateAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientUpdateAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUpdateAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
