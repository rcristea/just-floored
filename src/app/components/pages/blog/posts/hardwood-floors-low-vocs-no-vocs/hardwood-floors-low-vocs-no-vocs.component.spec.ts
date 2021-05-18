import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwoodFloorsLowVocsNoVocsComponent } from './hardwood-floors-low-vocs-no-vocs.component';

describe('HardwoodFloorsLowVocsNoVocsComponent', () => {
  let component: HardwoodFloorsLowVocsNoVocsComponent;
  let fixture: ComponentFixture<HardwoodFloorsLowVocsNoVocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwoodFloorsLowVocsNoVocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwoodFloorsLowVocsNoVocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
