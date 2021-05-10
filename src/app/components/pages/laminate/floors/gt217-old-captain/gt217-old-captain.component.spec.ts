import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt217OldCaptainComponent } from './gt217-old-captain.component';

describe('Gt217OldCaptainComponent', () => {
  let component: Gt217OldCaptainComponent;
  let fixture: ComponentFixture<Gt217OldCaptainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt217OldCaptainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt217OldCaptainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
