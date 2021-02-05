import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vana2Component } from './vana2.component';

describe('Vana2Component', () => {
  let component: Vana2Component;
  let fixture: ComponentFixture<Vana2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vana2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vana2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
