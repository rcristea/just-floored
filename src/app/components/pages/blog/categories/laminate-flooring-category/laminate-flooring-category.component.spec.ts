import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateFlooringCategoryComponent } from './laminate-flooring-category.component';

describe('LaminateFlooringCategoryComponent', () => {
  let component: LaminateFlooringCategoryComponent;
  let fixture: ComponentFixture<LaminateFlooringCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateFlooringCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateFlooringCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
