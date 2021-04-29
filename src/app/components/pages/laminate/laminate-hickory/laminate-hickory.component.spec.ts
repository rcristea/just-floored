import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateHickoryComponent } from './laminate-hickory.component';

describe('LaminateHickoryComponent', () => {
  let component: LaminateHickoryComponent;
  let fixture: ComponentFixture<LaminateHickoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateHickoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateHickoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
