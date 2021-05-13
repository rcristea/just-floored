import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf802NaturalWalnutComponent } from './wf802-natural-walnut.component';

describe('Wf802NaturalWalnutComponent', () => {
  let component: Wf802NaturalWalnutComponent;
  let fixture: ComponentFixture<Wf802NaturalWalnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf802NaturalWalnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf802NaturalWalnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
