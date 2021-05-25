import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariettaComponent } from './marietta.component';

describe('MariettaComponent', () => {
  let component: MariettaComponent;
  let fixture: ComponentFixture<MariettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariettaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MariettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
