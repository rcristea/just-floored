import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DunwoodyComponent } from './dunwoody.component';

describe('DunwoodyComponent', () => {
  let component: DunwoodyComponent;
  let fixture: ComponentFixture<DunwoodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DunwoodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DunwoodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
