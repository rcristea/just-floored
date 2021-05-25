import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmValleyComponent } from './palm-valley.component';

describe('PalmValleyComponent', () => {
  let component: PalmValleyComponent;
  let fixture: ComponentFixture<PalmValleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmValleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
