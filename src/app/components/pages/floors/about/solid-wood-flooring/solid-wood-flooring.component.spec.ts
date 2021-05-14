import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidWoodFlooringComponent } from './solid-wood-flooring.component';

describe('SolidWoodFlooringComponent', () => {
  let component: SolidWoodFlooringComponent;
  let fixture: ComponentFixture<SolidWoodFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidWoodFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidWoodFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
