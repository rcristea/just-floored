import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf803CoffeeMapleComponent } from './wf803-coffee-maple.component';

describe('Wf803CoffeeMapleComponent', () => {
  let component: Wf803CoffeeMapleComponent;
  let fixture: ComponentFixture<Wf803CoffeeMapleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf803CoffeeMapleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf803CoffeeMapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
