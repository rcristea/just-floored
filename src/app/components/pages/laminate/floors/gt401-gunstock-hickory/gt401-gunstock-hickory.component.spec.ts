import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt401GunstockHickoryComponent } from './gt401-gunstock-hickory.component';

describe('Gt401GunstockHickoryComponent', () => {
  let component: Gt401GunstockHickoryComponent;
  let fixture: ComponentFixture<Gt401GunstockHickoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt401GunstockHickoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt401GunstockHickoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
