import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeredWoodCategoryComponent } from './engineered-wood-category.component';

describe('EngineeredWoodCategoryComponent', () => {
  let component: EngineeredWoodCategoryComponent;
  let fixture: ComponentFixture<EngineeredWoodCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeredWoodCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeredWoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
