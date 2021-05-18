import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBambooFlooringComponent } from './blog-bamboo-flooring.component';

describe('BlogBambooFlooringComponent', () => {
  let component: BlogBambooFlooringComponent;
  let fixture: ComponentFixture<BlogBambooFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBambooFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBambooFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
