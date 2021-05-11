import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt404NightfallHickoryComponent } from './gt404-nightfall-hickory.component';

describe('Gt404NightfallHickoryComponent', () => {
  let component: Gt404NightfallHickoryComponent;
  let fixture: ComponentFixture<Gt404NightfallHickoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt404NightfallHickoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt404NightfallHickoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
