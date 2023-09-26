import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCComponent } from './screen-c.component';

describe('ScreenCComponent', () => {
  let component: ScreenCComponent;
  let fixture: ComponentFixture<ScreenCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenCComponent]
    });
    fixture = TestBed.createComponent(ScreenCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
