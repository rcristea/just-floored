import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt708HeronOakComponent } from './gt708-heron-oak.component';

describe('Gt708HeronOakComponent', () => {
  let component: Gt708HeronOakComponent;
  let fixture: ComponentFixture<Gt708HeronOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt708HeronOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt708HeronOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
