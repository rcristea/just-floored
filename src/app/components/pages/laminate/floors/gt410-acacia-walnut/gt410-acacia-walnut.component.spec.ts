import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt410AcaciaWalnutComponent } from './gt410-acacia-walnut.component';

describe('Gt410AcaciaWalnutComponent', () => {
  let component: Gt410AcaciaWalnutComponent;
  let fixture: ComponentFixture<Gt410AcaciaWalnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt410AcaciaWalnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt410AcaciaWalnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
