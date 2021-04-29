import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeredBirchComponent } from './engineered-birch.component';

describe('EngineeredBirchComponent', () => {
  let component: EngineeredBirchComponent;
  let fixture: ComponentFixture<EngineeredBirchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeredBirchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeredBirchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
