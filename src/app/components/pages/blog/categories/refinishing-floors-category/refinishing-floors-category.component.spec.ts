import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinishingFloorsCategoryComponent } from './refinishing-floors-category.component';

describe('RefinishingFloorsCategoryComponent', () => {
  let component: RefinishingFloorsCategoryComponent;
  let fixture: ComponentFixture<RefinishingFloorsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefinishingFloorsCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinishingFloorsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
