import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmaListComponent } from './carma-list.component';

describe('CarmaListComponent', () => {
  let component: CarmaListComponent;
  let fixture: ComponentFixture<CarmaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
