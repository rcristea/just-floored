import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylLvpComponent } from './vinyl-lvp.component';

describe('VinylLvpComponent', () => {
  let component: VinylLvpComponent;
  let fixture: ComponentFixture<VinylLvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylLvpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylLvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
