import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf904SeabrookOakComponent } from './wf904-seabrook-oak.component';

describe('Wf904SeabrookOakComponent', () => {
  let component: Wf904SeabrookOakComponent;
  let fixture: ComponentFixture<Wf904SeabrookOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf904SeabrookOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf904SeabrookOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
