import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterParkComponent } from './winter-park.component';

describe('WinterParkComponent', () => {
  let component: WinterParkComponent;
  let fixture: ComponentFixture<WinterParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterParkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
