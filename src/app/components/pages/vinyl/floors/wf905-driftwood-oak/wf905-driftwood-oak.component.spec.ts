import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf905DriftwoodOakComponent } from './wf905-driftwood-oak.component';

describe('Wf905DriftwoodOakComponent', () => {
  let component: Wf905DriftwoodOakComponent;
  let fixture: ComponentFixture<Wf905DriftwoodOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf905DriftwoodOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf905DriftwoodOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
