import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt213GeyerWalnutComponent } from './gt213-geyer-walnut.component';

describe('Gt213GeyerWalnutComponent', () => {
  let component: Gt213GeyerWalnutComponent;
  let fixture: ComponentFixture<Gt213GeyerWalnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt213GeyerWalnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt213GeyerWalnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
