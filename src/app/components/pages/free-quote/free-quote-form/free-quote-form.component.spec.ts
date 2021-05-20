import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeQuoteFormComponent } from './free-quote-form.component';

describe('FreeQuoteFormComponent', () => {
  let component: FreeQuoteFormComponent;
  let fixture: ComponentFixture<FreeQuoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeQuoteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
