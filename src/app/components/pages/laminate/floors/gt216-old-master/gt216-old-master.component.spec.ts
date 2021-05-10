import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gt216OldMasterComponent } from './gt216-old-master.component';

describe('Gt216OldMasterComponent', () => {
  let component: Gt216OldMasterComponent;
  let fixture: ComponentFixture<Gt216OldMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gt216OldMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gt216OldMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
