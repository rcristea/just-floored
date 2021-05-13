import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vf002RockportComponent } from './vf002-rockport.component';

describe('Vf002RockportComponent', () => {
  let component: Vf002RockportComponent;
  let fixture: ComponentFixture<Vf002RockportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vf002RockportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vf002RockportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
