import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylPlankCategoryComponent } from './vinyl-plank-category.component';

describe('VinylPlankCategoryComponent', () => {
  let component: VinylPlankCategoryComponent;
  let fixture: ComponentFixture<VinylPlankCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylPlankCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylPlankCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
