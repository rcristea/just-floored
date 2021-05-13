import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf902NatureAcaciaComponent } from './wf902-nature-acacia.component';

describe('Wf902NatureAcaciaComponent', () => {
  let component: Wf902NatureAcaciaComponent;
  let fixture: ComponentFixture<Wf902NatureAcaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf902NatureAcaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf902NatureAcaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
