import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaculaComponent } from './dacula.component';

describe('DaculaComponent', () => {
  let component: DaculaComponent;
  let fixture: ComponentFixture<DaculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
