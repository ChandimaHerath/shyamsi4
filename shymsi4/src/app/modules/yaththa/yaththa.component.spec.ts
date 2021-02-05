import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaththaComponent } from './yaththa.component';

describe('YaththaComponent', () => {
  let component: YaththaComponent;
  let fixture: ComponentFixture<YaththaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YaththaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YaththaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
