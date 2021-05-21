import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloweryBranchComponent } from './flowery-branch.component';

describe('FloweryBranchComponent', () => {
  let component: FloweryBranchComponent;
  let fixture: ComponentFixture<FloweryBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloweryBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloweryBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
