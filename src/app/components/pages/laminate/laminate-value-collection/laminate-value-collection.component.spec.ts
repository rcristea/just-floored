import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateValueCollectionComponent } from './laminate-value-collection.component';

describe('LaminateValueCollectionComponent', () => {
  let component: LaminateValueCollectionComponent;
  let fixture: ComponentFixture<LaminateValueCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateValueCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateValueCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
