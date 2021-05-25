import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpharettaComponent } from './alpharetta.component';

describe('AlpharettaComponent', () => {
  let component: AlpharettaComponent;
  let fixture: ComponentFixture<AlpharettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpharettaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpharettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
