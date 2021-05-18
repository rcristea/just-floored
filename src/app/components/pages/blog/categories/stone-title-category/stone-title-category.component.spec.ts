import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneTitleCategoryComponent } from './stone-title-category.component';

describe('StoneTitleCategoryComponent', () => {
  let component: StoneTitleCategoryComponent;
  let fixture: ComponentFixture<StoneTitleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoneTitleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoneTitleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
