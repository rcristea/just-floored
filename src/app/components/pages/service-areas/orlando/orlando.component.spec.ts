import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrlandoComponent } from './orlando.component';

describe('OrlandoComponent', () => {
  let component: OrlandoComponent;
  let fixture: ComponentFixture<OrlandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrlandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrlandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
