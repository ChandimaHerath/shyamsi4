import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChathuraComponent } from './chathura.component';

describe('ChathuraComponent', () => {
  let component: ChathuraComponent;
  let fixture: ComponentFixture<ChathuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChathuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChathuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
