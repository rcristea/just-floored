import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcVinylFlooringComponent } from './spc-vinyl-flooring.component';

describe('SpcVinylFlooringComponent', () => {
  let component: SpcVinylFlooringComponent;
  let fixture: ComponentFixture<SpcVinylFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpcVinylFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpcVinylFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
