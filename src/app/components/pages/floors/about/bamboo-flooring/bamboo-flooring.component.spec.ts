import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BambooFlooringComponent } from './bamboo-flooring.component';

describe('BambooFlooringComponent', () => {
  let component: BambooFlooringComponent;
  let fixture: ComponentFixture<BambooFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BambooFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BambooFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
