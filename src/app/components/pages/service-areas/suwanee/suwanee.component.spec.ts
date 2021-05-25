import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuwaneeComponent } from './suwanee.component';

describe('SuwaneeComponent', () => {
  let component: SuwaneeComponent;
  let fixture: ComponentFixture<SuwaneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuwaneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuwaneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
