import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chandima2Component } from './chandima2.component';

describe('Chandima2Component', () => {
  let component: Chandima2Component;
  let fixture: ComponentFixture<Chandima2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chandima2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chandima2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
