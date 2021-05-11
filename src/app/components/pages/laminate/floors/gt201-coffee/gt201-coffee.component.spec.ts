import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt201CoffeeComponent } from './gt201-coffee.component';

describe('Gt201CoffeeComponent', () => {
  let component: Gt201CoffeeComponent;
  let fixture: ComponentFixture<Gt201CoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt201CoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt201CoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
