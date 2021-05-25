import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandySpringsComponent } from './sandy-springs.component';

describe('SandySpringsComponent', () => {
  let component: SandySpringsComponent;
  let fixture: ComponentFixture<SandySpringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandySpringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandySpringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
