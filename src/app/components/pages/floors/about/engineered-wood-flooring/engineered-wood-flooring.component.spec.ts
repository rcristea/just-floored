import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeredWoodFlooringComponent } from './engineered-wood-flooring.component';

describe('EngineeredWoodFlooringComponent', () => {
  let component: EngineeredWoodFlooringComponent;
  let fixture: ComponentFixture<EngineeredWoodFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeredWoodFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeredWoodFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
