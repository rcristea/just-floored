import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalvestonComponent } from './galveston.component';

describe('GalvestonComponent', () => {
  let component: GalvestonComponent;
  let fixture: ComponentFixture<GalvestonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalvestonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalvestonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
