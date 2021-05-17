import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BambooFlooringCategoryComponent } from './bamboo-flooring-category.component';

describe('BambooFlooringCategoryComponent', () => {
  let component: BambooFlooringCategoryComponent;
  let fixture: ComponentFixture<BambooFlooringCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BambooFlooringCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BambooFlooringCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
