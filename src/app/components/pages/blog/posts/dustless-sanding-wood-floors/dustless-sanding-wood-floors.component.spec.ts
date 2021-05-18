import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DustlessSandingWoodFloorsComponent } from './dustless-sanding-wood-floors.component';

describe('DustlessSandingWoodFloorsComponent', () => {
  let component: DustlessSandingWoodFloorsComponent;
  let fixture: ComponentFixture<DustlessSandingWoodFloorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DustlessSandingWoodFloorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DustlessSandingWoodFloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
