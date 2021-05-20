import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeQuoteFormContactsComponent } from './free-quote-form-contacts.component';

describe('FreeQuoteFormContactsComponent', () => {
  let component: FreeQuoteFormContactsComponent;
  let fixture: ComponentFixture<FreeQuoteFormContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeQuoteFormContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeQuoteFormContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
