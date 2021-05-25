import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilburnComponent } from './lilburn.component';

describe('LilburnComponent', () => {
  let component: LilburnComponent;
  let fixture: ComponentFixture<LilburnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilburnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LilburnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
