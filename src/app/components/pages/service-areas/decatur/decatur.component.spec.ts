import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecaturComponent } from './decatur.component';

describe('DecaturComponent', () => {
  let component: DecaturComponent;
  let fixture: ComponentFixture<DecaturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecaturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
