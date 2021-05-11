import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt407ParkWalnutComponent } from './gt407-park-walnut.component';

describe('Gt407ParkWalnutComponent', () => {
  let component: Gt407ParkWalnutComponent;
  let fixture: ComponentFixture<Gt407ParkWalnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt407ParkWalnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt407ParkWalnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
