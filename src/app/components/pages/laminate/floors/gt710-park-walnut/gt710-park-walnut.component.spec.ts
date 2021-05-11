import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt710ParkWalnutComponent } from './gt710-park-walnut.component';

describe('Gt710ParkWalnutComponent', () => {
  let component: Gt710ParkWalnutComponent;
  let fixture: ComponentFixture<Gt710ParkWalnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt710ParkWalnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt710ParkWalnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
