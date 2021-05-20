import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeQuoteFormInterestsComponent } from './free-quote-form-interests.component';

describe('FreeQuoteFormInterestsComponent', () => {
  let component: FreeQuoteFormInterestsComponent;
  let fixture: ComponentFixture<FreeQuoteFormInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeQuoteFormInterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeQuoteFormInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
