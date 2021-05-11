import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt108TawnyOakComponent } from './gt108-tawny-oak.component';

describe('Gt108TawnyOakComponent', () => {
  let component: Gt108TawnyOakComponent;
  let fixture: ComponentFixture<Gt108TawnyOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt108TawnyOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt108TawnyOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
