import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanaComponent } from './vana.component';

describe('VanaComponent', () => {
  let component: VanaComponent;
  let fixture: ComponentFixture<VanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
