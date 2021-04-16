import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeredAcaciaComponent } from './engineered-acacia.component';

describe('EngineeredAcaciaComponent', () => {
  let component: EngineeredAcaciaComponent;
  let fixture: ComponentFixture<EngineeredAcaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeredAcaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeredAcaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
