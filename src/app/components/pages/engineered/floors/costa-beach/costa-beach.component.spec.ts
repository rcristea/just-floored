import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostaBeachComponent } from './costa-beach.component';

describe('CostaBeachComponent', () => {
  let component: CostaBeachComponent;
  let fixture: ComponentFixture<CostaBeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostaBeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostaBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
