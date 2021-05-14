import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylPlankFlooringComponent } from './vinyl-plank-flooring.component';

describe('VinylPlankFlooringComponent', () => {
  let component: VinylPlankFlooringComponent;
  let fixture: ComponentFixture<VinylPlankFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylPlankFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylPlankFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
