import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vf001PrestigeComponent } from './vf001-prestige.component';

describe('Vf001PrestigeComponent', () => {
  let component: Vf001PrestigeComponent;
  let fixture: ComponentFixture<Vf001PrestigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vf001PrestigeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vf001PrestigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
