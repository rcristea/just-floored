import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufordComponent } from './buford.component';

describe('BufordComponent', () => {
  let component: BufordComponent;
  let fixture: ComponentFixture<BufordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
