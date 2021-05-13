import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf909ClarionWoodComponent } from './wf909-clarion-wood.component';

describe('Wf909ClarionWoodComponent', () => {
  let component: Wf909ClarionWoodComponent;
  let fixture: ComponentFixture<Wf909ClarionWoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf909ClarionWoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf909ClarionWoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
