import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf908FlintOakComponent } from './wf908-flint-oak.component';

describe('Wf908FlintOakComponent', () => {
  let component: Wf908FlintOakComponent;
  let fixture: ComponentFixture<Wf908FlintOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf908FlintOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf908FlintOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
