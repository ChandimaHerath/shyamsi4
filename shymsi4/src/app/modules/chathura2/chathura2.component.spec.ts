import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chathura2Component } from './chathura2.component';

describe('Chathura2Component', () => {
  let component: Chathura2Component;
  let fixture: ComponentFixture<Chathura2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chathura2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chathura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
