import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt102PatinaOakComponent } from './gt102-patina-oak.component';

describe('Gt102PatinaOakComponent', () => {
  let component: Gt102PatinaOakComponent;
  let fixture: ComponentFixture<Gt102PatinaOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt102PatinaOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt102PatinaOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
