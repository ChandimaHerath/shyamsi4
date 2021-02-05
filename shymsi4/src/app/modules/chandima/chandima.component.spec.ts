import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandimaComponent } from './chandima.component';

describe('ChandimaComponent', () => {
  let component: ChandimaComponent;
  let fixture: ComponentFixture<ChandimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChandimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
