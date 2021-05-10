import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt202ReddishComponent } from './gt202-reddish.component';

describe('Gt202ReddishComponent', () => {
  let component: Gt202ReddishComponent;
  let fixture: ComponentFixture<Gt202ReddishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt202ReddishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt202ReddishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
