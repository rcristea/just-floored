import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf606BlackstoneOakComponent } from './wf606-blackstone-oak.component';

describe('Wf606BlackstoneOakComponent', () => {
  let component: Wf606BlackstoneOakComponent;
  let fixture: ComponentFixture<Wf606BlackstoneOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf606BlackstoneOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf606BlackstoneOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
