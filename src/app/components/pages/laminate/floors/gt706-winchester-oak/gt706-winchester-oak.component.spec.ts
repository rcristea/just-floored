import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt706WinchesterOakComponent } from './gt706-winchester-oak.component';

describe('Gt706WinchesterOakComponent', () => {
  let component: Gt706WinchesterOakComponent;
  let fixture: ComponentFixture<Gt706WinchesterOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt706WinchesterOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt706WinchesterOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
