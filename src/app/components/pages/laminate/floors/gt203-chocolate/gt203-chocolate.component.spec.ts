import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt203ChocolateComponent } from './gt203-chocolate.component';

describe('Gt203ChocolateComponent', () => {
  let component: Gt203ChocolateComponent;
  let fixture: ComponentFixture<Gt203ChocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt203ChocolateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt203ChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
