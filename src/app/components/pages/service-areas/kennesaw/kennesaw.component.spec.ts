import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KennesawComponent } from './kennesaw.component';

describe('KennesawComponent', () => {
  let component: KennesawComponent;
  let fixture: ComponentFixture<KennesawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KennesawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KennesawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
