import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf906TavernOakComponent } from './wf906-tavern-oak.component';

describe('Wf906TavernOakComponent', () => {
  let component: Wf906TavernOakComponent;
  let fixture: ComponentFixture<Wf906TavernOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf906TavernOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf906TavernOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
