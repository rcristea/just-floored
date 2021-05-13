import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vf006AcaciaComponent } from './vf006-acacia.component';

describe('Vf006AcaciaComponent', () => {
  let component: Vf006AcaciaComponent;
  let fixture: ComponentFixture<Vf006AcaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vf006AcaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vf006AcaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
