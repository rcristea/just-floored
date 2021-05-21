import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuluthComponent } from './duluth.component';

describe('DuluthComponent', () => {
  let component: DuluthComponent;
  let fixture: ComponentFixture<DuluthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuluthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuluthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
