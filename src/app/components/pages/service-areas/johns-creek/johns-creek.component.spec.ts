import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnsCreekComponent } from './johns-creek.component';

describe('JohnsCreekComponent', () => {
  let component: JohnsCreekComponent;
  let fixture: ComponentFixture<JohnsCreekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JohnsCreekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnsCreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
