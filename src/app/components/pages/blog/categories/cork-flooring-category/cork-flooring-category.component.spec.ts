import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorkFlooringCategoryComponent } from './cork-flooring-category.component';

describe('CorkFlooringCategoryComponent', () => {
  let component: CorkFlooringCategoryComponent;
  let fixture: ComponentFixture<CorkFlooringCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorkFlooringCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorkFlooringCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
