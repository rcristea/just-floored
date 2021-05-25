import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmyrnaComponent } from './smyrna.component';

describe('SmyrnaComponent', () => {
  let component: SmyrnaComponent;
  let fixture: ComponentFixture<SmyrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmyrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmyrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
