import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogP1Component } from './blog-p1.component';

describe('BlogP1Component', () => {
  let component: BlogP1Component;
  let fixture: ComponentFixture<BlogP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
