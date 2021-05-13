import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf604AlexaOakComponent } from './wf604-alexa-oak.component';

describe('Wf604AlexaOakComponent', () => {
  let component: Wf604AlexaOakComponent;
  let fixture: ComponentFixture<Wf604AlexaOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf604AlexaOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf604AlexaOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
