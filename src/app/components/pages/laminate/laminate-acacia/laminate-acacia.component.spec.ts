import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateAcaciaComponent } from './laminate-acacia.component';

describe('LaminateAcaciaComponent', () => {
  let component: LaminateAcaciaComponent;
  let fixture: ComponentFixture<LaminateAcaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateAcaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateAcaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
