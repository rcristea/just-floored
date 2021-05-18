import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandscrapedHardwoodFlooringComponent } from './handscraped-hardwood-flooring.component';

describe('HandscrapedHardwoodFlooringComponent', () => {
  let component: HandscrapedHardwoodFlooringComponent;
  let fixture: ComponentFixture<HandscrapedHardwoodFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandscrapedHardwoodFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandscrapedHardwoodFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
