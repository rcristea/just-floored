import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt302RoseWoodComponent } from './gt302-rose-wood.component';

describe('Gt302RoseWoodComponent', () => {
  let component: Gt302RoseWoodComponent;
  let fixture: ComponentFixture<Gt302RoseWoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt302RoseWoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt302RoseWoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
