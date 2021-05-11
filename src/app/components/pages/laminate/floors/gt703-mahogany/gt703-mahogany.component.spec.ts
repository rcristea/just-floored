import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt703MahoganyComponent } from './gt703-mahogany.component';

describe('Gt703MahoganyComponent', () => {
  let component: Gt703MahoganyComponent;
  let fixture: ComponentFixture<Gt703MahoganyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt703MahoganyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt703MahoganyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
