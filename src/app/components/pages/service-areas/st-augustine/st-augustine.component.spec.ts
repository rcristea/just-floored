import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StAugustineComponent } from './st-augustine.component';

describe('StAugustineComponent', () => {
  let component: StAugustineComponent;
  let fixture: ComponentFixture<StAugustineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StAugustineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StAugustineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
