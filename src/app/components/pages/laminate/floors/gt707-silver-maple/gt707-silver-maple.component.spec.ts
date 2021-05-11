import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt707SilverMapleComponent } from './gt707-silver-maple.component';

describe('Gt707SilverMapleComponent', () => {
  let component: Gt707SilverMapleComponent;
  let fixture: ComponentFixture<Gt707SilverMapleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt707SilverMapleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt707SilverMapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
