import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vf005OakComponent } from './vf005-oak.component';

describe('Vf005OakComponent', () => {
  let component: Vf005OakComponent;
  let fixture: ComponentFixture<Vf005OakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vf005OakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vf005OakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
