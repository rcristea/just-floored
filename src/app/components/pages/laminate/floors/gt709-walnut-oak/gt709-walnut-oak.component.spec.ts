import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt709WalnutOakComponent } from './gt709-walnut-oak.component';

describe('Gt709WalnutOakComponent', () => {
  let component: Gt709WalnutOakComponent;
  let fixture: ComponentFixture<Gt709WalnutOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt709WalnutOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt709WalnutOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
