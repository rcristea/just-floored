import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishOrReplaceWoodFloorsComponent } from './refinish-or-replace-wood-floors.component';

describe('FinishOrReplaceWoodFloorsComponent', () => {
  let component: FinishOrReplaceWoodFloorsComponent;
  let fixture: ComponentFixture<FinishOrReplaceWoodFloorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishOrReplaceWoodFloorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishOrReplaceWoodFloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
