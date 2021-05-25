import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeachtreeCornersComponent } from './peachtree-corners.component';

describe('PeachtreeCornersComponent', () => {
  let component: PeachtreeCornersComponent;
  let fixture: ComponentFixture<PeachtreeCornersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeachtreeCornersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeachtreeCornersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
