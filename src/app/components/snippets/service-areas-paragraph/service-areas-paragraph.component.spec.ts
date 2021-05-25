import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAreasParagraphComponent } from './service-areas-paragraph.component';

describe('ServiceAreasParagraphComponent', () => {
  let component: ServiceAreasParagraphComponent;
  let fixture: ComponentFixture<ServiceAreasParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAreasParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAreasParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
