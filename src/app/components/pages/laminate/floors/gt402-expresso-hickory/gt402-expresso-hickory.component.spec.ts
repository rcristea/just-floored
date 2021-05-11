import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt402ExpressoHickoryComponent } from './gt402-expresso-hickory.component';

describe('Gt402ExpressoHickoryComponent', () => {
  let component: Gt402ExpressoHickoryComponent;
  let fixture: ComponentFixture<Gt402ExpressoHickoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt402ExpressoHickoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt402ExpressoHickoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
