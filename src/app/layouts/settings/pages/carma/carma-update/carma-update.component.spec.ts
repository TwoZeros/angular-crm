import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmaUpdateComponent } from './carma-update.component';

describe('CarmaUpdateComponent', () => {
  let component: CarmaUpdateComponent;
  let fixture: ComponentFixture<CarmaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
