import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vf004AshfordComponent } from './vf004-ashford.component';

describe('Vf004AshfordComponent', () => {
  let component: Vf004AshfordComponent;
  let fixture: ComponentFixture<Vf004AshfordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vf004AshfordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vf004AshfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
