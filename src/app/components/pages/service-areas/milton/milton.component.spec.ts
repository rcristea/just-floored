import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiltonComponent } from './milton.component';

describe('MiltonComponent', () => {
  let component: MiltonComponent;
  let fixture: ComponentFixture<MiltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiltonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
