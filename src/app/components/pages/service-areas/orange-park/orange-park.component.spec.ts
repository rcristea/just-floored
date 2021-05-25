import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeParkComponent } from './orange-park.component';

describe('OrangeParkComponent', () => {
  let component: OrangeParkComponent;
  let fixture: ComponentFixture<OrangeParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
