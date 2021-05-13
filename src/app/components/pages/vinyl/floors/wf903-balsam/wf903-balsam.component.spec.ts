import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf903BalsamComponent } from './wf903-balsam.component';

describe('Wf903BalsamComponent', () => {
  let component: Wf903BalsamComponent;
  let fixture: ComponentFixture<Wf903BalsamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf903BalsamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf903BalsamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
