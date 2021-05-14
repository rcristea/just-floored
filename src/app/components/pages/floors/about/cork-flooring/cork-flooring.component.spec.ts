import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorkFlooringComponent } from './cork-flooring.component';

describe('CorkFlooringComponent', () => {
  let component: CorkFlooringComponent;
  let fixture: ComponentFixture<CorkFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorkFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorkFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
