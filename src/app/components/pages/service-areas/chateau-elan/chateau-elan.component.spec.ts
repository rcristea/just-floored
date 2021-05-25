import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateauElanComponent } from './chateau-elan.component';

describe('ChateauElanComponent', () => {
  let component: ChateauElanComponent;
  let fixture: ComponentFixture<ChateauElanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChateauElanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChateauElanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
