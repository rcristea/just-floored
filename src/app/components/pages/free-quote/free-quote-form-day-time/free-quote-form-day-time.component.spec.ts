import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeQuoteFormDayTimeComponent } from './free-quote-form-day-time.component';

describe('FreeQuoteFormDayTimeComponent', () => {
  let component: FreeQuoteFormDayTimeComponent;
  let fixture: ComponentFixture<FreeQuoteFormDayTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeQuoteFormDayTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeQuoteFormDayTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
