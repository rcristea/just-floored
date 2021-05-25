import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrtleBeachComponent } from './myrtle-beach.component';

describe('MyrtleBeachComponent', () => {
  let component: MyrtleBeachComponent;
  let fixture: ComponentFixture<MyrtleBeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrtleBeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrtleBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
