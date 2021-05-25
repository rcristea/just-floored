import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuckerComponent } from './tucker.component';

describe('TuckerComponent', () => {
  let component: TuckerComponent;
  let fixture: ComponentFixture<TuckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
