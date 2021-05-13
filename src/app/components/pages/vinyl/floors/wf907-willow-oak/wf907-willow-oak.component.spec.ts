import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf907WillowOakComponent } from './wf907-willow-oak.component';

describe('Wf907WillowOakComponent', () => {
  let component: Wf907WillowOakComponent;
  let fixture: ComponentFixture<Wf907WillowOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf907WillowOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf907WillowOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
