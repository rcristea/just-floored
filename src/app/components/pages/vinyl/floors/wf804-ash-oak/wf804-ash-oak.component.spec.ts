import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf804AshOakComponent } from './wf804-ash-oak.component';

describe('Wf804AshOakComponent', () => {
  let component: Wf804AshOakComponent;
  let fixture: ComponentFixture<Wf804AshOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf804AshOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf804AshOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
