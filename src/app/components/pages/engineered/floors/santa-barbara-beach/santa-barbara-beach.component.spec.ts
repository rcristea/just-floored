import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaBarbaraBeachComponent } from './santa-barbara-beach.component';

describe('SantaBarbaraBeachComponent', () => {
  let component: SantaBarbaraBeachComponent;
  let fixture: ComponentFixture<SantaBarbaraBeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantaBarbaraBeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaBarbaraBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
