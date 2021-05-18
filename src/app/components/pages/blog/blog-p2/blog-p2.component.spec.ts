import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { BlogP2Component } from './blog-p2.component';

describe('BlogP2Component', () => {
  let component: BlogP2Component;
  let fixture: ComponentFixture<BlogP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
