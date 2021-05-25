import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CummingComponent } from './cumming.component';

describe('CummingComponent', () => {
  let component: CummingComponent;
  let fixture: ComponentFixture<CummingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CummingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CummingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
