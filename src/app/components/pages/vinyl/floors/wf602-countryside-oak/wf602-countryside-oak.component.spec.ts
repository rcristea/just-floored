import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf602CountrysideOakComponent } from './wf602-countryside-oak.component';

describe('Wf602CountrysideOakComponent', () => {
  let component: Wf602CountrysideOakComponent;
  let fixture: ComponentFixture<Wf602CountrysideOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf602CountrysideOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf602CountrysideOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
