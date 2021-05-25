import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GainesvilleComponent } from './gainesville.component';

describe('GainesvilleComponent', () => {
  let component: GainesvilleComponent;
  let fixture: ComponentFixture<GainesvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GainesvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GainesvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
