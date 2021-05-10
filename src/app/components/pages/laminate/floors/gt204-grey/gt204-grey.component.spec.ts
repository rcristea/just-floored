import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt204GreyComponent } from './gt204-grey.component';

describe('Gt204GreyComponent', () => {
  let component: Gt204GreyComponent;
  let fixture: ComponentFixture<Gt204GreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt204GreyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt204GreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
