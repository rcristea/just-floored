import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt702GrandOakComponent } from './gt702-grand-oak.component';

describe('Gt702GrandOakComponent', () => {
  let component: Gt702GrandOakComponent;
  let fixture: ComponentFixture<Gt702GrandOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt702GrandOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt702GrandOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
