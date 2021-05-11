import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt409AcaciaNatureComponent } from './gt409-acacia-nature.component';

describe('Gt409AcaciaNatureComponent', () => {
  let component: Gt409AcaciaNatureComponent;
  let fixture: ComponentFixture<Gt409AcaciaNatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt409AcaciaNatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt409AcaciaNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
