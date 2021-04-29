import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeredHickoryComponent } from './engineered-hickory.component';

describe('EngineeredHickoryComponent', () => {
  let component: EngineeredHickoryComponent;
  let fixture: ComponentFixture<EngineeredHickoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeredHickoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeredHickoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
