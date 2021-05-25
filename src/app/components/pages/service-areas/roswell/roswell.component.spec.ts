import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoswellComponent } from './roswell.component';

describe('RoswellComponent', () => {
  let component: RoswellComponent;
  let fixture: ComponentFixture<RoswellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoswellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoswellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
