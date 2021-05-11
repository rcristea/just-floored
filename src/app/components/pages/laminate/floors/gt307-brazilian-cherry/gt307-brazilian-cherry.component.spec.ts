import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt307BrazilianCherryComponent } from './gt307-brazilian-cherry.component';

describe('Gt307BrazilianCherryComponent', () => {
  let component: Gt307BrazilianCherryComponent;
  let fixture: ComponentFixture<Gt307BrazilianCherryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt307BrazilianCherryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt307BrazilianCherryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
