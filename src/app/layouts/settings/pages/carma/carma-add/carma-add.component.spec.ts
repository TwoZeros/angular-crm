import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmaAddComponent } from './carma-add.component';

describe('CarmaAddComponent', () => {
  let component: CarmaAddComponent;
  let fixture: ComponentFixture<CarmaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
