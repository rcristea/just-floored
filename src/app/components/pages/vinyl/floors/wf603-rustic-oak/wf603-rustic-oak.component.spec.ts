import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf603RusticOakComponent } from './wf603-rustic-oak.component';

describe('Wf603RusticOakComponent', () => {
  let component: Wf603RusticOakComponent;
  let fixture: ComponentFixture<Wf603RusticOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf603RusticOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf603RusticOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
