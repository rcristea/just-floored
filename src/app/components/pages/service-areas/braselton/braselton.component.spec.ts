import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraseltonComponent } from './braselton.component';

describe('BraseltonComponent', () => {
  let component: BraseltonComponent;
  let fixture: ComponentFixture<BraseltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraseltonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BraseltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
