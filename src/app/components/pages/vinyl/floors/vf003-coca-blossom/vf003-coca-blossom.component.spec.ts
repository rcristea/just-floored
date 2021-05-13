import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vf003CocaBlossomComponent } from './vf003-coca-blossom.component';

describe('Vf003CocaBlossomComponent', () => {
  let component: Vf003CocaBlossomComponent;
  let fixture: ComponentFixture<Vf003CocaBlossomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vf003CocaBlossomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vf003CocaBlossomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
