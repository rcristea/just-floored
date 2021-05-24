import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoschtonComponent } from './hoschton.component';

describe('HoschtonComponent', () => {
  let component: HoschtonComponent;
  let fixture: ComponentFixture<HoschtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoschtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoschtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
