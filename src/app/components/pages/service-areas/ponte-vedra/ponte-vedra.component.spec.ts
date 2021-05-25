import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonteVedraComponent } from './ponte-vedra.component';

describe('PonteVedraComponent', () => {
  let component: PonteVedraComponent;
  let fixture: ComponentFixture<PonteVedraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonteVedraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonteVedraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
