import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt212VolcanicAshComponent } from './gt212-volcanic-ash.component';

describe('Gt212VolcanicAshComponent', () => {
  let component: Gt212VolcanicAshComponent;
  let fixture: ComponentFixture<Gt212VolcanicAshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt212VolcanicAshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt212VolcanicAshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
