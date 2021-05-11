import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt405SunsetHickoryComponent } from './gt405-sunset-hickory.component';

describe('Gt405SunsetHickoryComponent', () => {
  let component: Gt405SunsetHickoryComponent;
  let fixture: ComponentFixture<Gt405SunsetHickoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt405SunsetHickoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt405SunsetHickoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
