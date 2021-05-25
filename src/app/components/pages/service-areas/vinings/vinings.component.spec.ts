import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViningsComponent } from './vinings.component';

describe('ViningsComponent', () => {
  let component: ViningsComponent;
  let fixture: ComponentFixture<ViningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
