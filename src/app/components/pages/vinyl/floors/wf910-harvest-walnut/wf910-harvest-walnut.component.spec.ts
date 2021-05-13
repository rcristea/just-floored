import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf910HarvestWalnutComponent } from './wf910-harvest-walnut.component';

describe('Wf910HarvestWalnutComponent', () => {
  let component: Wf910HarvestWalnutComponent;
  let fixture: ComponentFixture<Wf910HarvestWalnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf910HarvestWalnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf910HarvestWalnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
