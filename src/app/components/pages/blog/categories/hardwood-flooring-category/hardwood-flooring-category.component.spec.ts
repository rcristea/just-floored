import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwoodFlooringCategoryComponent } from './hardwood-flooring-category.component';

describe('HardwoodFlooringCategoryComponent', () => {
  let component: HardwoodFlooringCategoryComponent;
  let fixture: ComponentFixture<HardwoodFlooringCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwoodFlooringCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwoodFlooringCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
