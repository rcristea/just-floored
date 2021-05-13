import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf601StoneGreyOakComponent } from './wf601-stone-grey-oak.component';

describe('Wf601StoneGreyOakComponent', () => {
  let component: Wf601StoneGreyOakComponent;
  let fixture: ComponentFixture<Wf601StoneGreyOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf601StoneGreyOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf601StoneGreyOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
