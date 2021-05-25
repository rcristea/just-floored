import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoganvilleComponent } from './loganville.component';

describe('LoganvilleComponent', () => {
  let component: LoganvilleComponent;
  let fixture: ComponentFixture<LoganvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoganvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoganvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
