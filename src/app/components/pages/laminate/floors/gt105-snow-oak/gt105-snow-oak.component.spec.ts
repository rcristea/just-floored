import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt105SnowOakComponent } from './gt105-snow-oak.component';

describe('Gt105SnowOakComponent', () => {
  let component: Gt105SnowOakComponent;
  let fixture: ComponentFixture<Gt105SnowOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt105SnowOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt105SnowOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
