import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt406OliveComponent } from './gt406-olive.component';

describe('Gt406OliveComponent', () => {
  let component: Gt406OliveComponent;
  let fixture: ComponentFixture<Gt406OliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt406OliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt406OliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
