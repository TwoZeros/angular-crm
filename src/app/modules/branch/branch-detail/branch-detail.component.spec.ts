import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDetailComponent } from './branch-detail.component';

describe('BranchDetailComponent', () => {
  let component: BranchDetailComponent;
  let fixture: ComponentFixture<BranchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
