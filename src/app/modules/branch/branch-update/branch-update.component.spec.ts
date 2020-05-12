import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchUpdateComponent } from './branch-update.component';

describe('BranchUpdateComponent', () => {
  let component: BranchUpdateComponent;
  let fixture: ComponentFixture<BranchUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
