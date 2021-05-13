import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wf605SpringfieldOakComponent } from './wf605-springfield-oak.component';

describe('Wf605SpringfieldOakComponent', () => {
  let component: Wf605SpringfieldOakComponent;
  let fixture: ComponentFixture<Wf605SpringfieldOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wf605SpringfieldOakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wf605SpringfieldOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
