import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherrypickchandimaComponent } from './cherrypickchandima.component';

describe('CherrypickchandimaComponent', () => {
  let component: CherrypickchandimaComponent;
  let fixture: ComponentFixture<CherrypickchandimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CherrypickchandimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CherrypickchandimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
