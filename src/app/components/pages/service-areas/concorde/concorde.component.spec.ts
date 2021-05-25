import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcordeComponent } from './concorde.component';

describe('ConcordeComponent', () => {
  let component: ConcordeComponent;
  let fixture: ComponentFixture<ConcordeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcordeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
