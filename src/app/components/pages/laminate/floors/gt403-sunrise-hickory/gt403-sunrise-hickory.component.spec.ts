import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt403SunriseHickoryComponent } from './gt403-sunrise-hickory.component';

describe('Gt403SunriseHickoryComponent', () => {
  let component: Gt403SunriseHickoryComponent;
  let fixture: ComponentFixture<Gt403SunriseHickoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt403SunriseHickoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt403SunriseHickoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
