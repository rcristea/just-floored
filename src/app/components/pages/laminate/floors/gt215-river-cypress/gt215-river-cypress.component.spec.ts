import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt215RiverCypressComponent } from './gt215-river-cypress.component';

describe('Gt215RiverCypressComponent', () => {
  let component: Gt215RiverCypressComponent;
  let fixture: ComponentFixture<Gt215RiverCypressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt215RiverCypressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt215RiverCypressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
