import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortMillComponent } from './fort-mill.component';

describe('FortMillComponent', () => {
  let component: FortMillComponent;
  let fixture: ComponentFixture<FortMillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortMillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortMillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
