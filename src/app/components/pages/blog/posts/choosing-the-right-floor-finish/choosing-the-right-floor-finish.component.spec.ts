import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingTheRightFloorFinishComponent } from './choosing-the-right-floor-finish.component';

describe('ChoosingTheRightFloorFinishComponent', () => {
  let component: ChoosingTheRightFloorFinishComponent;
  let fixture: ComponentFixture<ChoosingTheRightFloorFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosingTheRightFloorFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosingTheRightFloorFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
