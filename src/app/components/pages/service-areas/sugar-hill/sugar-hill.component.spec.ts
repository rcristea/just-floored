import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarHillComponent } from './sugar-hill.component';

describe('SugarHillComponent', () => {
  let component: SugarHillComponent;
  let fixture: ComponentFixture<SugarHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarHillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
