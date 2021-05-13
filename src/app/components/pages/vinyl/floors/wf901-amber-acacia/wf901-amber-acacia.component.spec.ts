import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf901AmberAcaciaComponent } from './wf901-amber-acacia.component';

describe('Wf901AmberAcaciaComponent', () => {
  let component: Wf901AmberAcaciaComponent;
  let fixture: ComponentFixture<Wf901AmberAcaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf901AmberAcaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf901AmberAcaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
