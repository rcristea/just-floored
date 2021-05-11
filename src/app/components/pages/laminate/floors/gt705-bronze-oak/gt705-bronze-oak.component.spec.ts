import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt705BronzeOakComponent } from './gt705-bronze-oak.component';

describe('Gt705BronzeOakComponent', () => {
  let component: Gt705BronzeOakComponent;
  let fixture: ComponentFixture<Gt705BronzeOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt705BronzeOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt705BronzeOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
