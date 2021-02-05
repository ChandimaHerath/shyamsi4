import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaththaCherryPickComponent } from './yaththa-cherry-pick.component';

describe('YaththaCherryPickComponent', () => {
  let component: YaththaCherryPickComponent;
  let fixture: ComponentFixture<YaththaCherryPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YaththaCherryPickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YaththaCherryPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
