import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf801WesternOakComponent } from './wf801-western-oak.component';

describe('Wf801WesternOakComponent', () => {
  let component: Wf801WesternOakComponent;
  let fixture: ComponentFixture<Wf801WesternOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf801WesternOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf801WesternOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
