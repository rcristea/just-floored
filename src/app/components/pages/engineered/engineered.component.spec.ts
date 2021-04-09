import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeredComponent } from './engineered.component';

describe('EngineeredComponent', () => {
  let component: EngineeredComponent;
  let fixture: ComponentFixture<EngineeredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
