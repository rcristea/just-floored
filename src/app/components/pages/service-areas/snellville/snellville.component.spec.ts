import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnellvilleComponent } from './snellville.component';

describe('SnellvilleComponent', () => {
  let component: SnellvilleComponent;
  let fixture: ComponentFixture<SnellvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnellvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnellvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
